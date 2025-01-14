const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <img src={baseUrl + 'img/Taquito.png'}></img>
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('quick_start.html')}>Quick Start</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              '* Easy to use and maintain, written in idiomatic Typescript style\n' +
              '* Well maintained and tested against all current, and anticipated Tezos protocols\n' +
              '* Portable, does not rely on any "stack" by default, except for the canonical Tezos RPC node\n' +
              '* Nightly and Continuous integration tests against official Tezos RPC nodes\n' +
              '* dApp development uses cases a first class concern, empowering new developers to get results quickly\n' +
              '* No dependencies on the Tezos RPC node for generating operations (Ex: not dependant on “forge” RPC method).\n' +
              '* Well documented API using [TypeDoc](https://tezostaquito.io/typedoc)\n' +
              '* Set of ready made React components for common use-cases, with a [Demo Gallery](https://tezostaquito.io/react-storybook/)\n' +
              '* Regular versioned releases, published to npmjs.org, with a published version strategy\n' +
              '* Participation in the [CII Best Practices](https://bestpractices.coreinfrastructure.org) program and all requirements entailed there in\n' +
              '* Portable - This library has minimum dependencies, making it usable in any js project on the front or back end.\n' +
              '* Compact - avoid bloat and keep compiled asset size low\n' +
              '* Portable, allowing wallet, dApp, or backend developers to start using the library quickly\n',
            image: `${baseUrl}img/goal.svg`,
            imageAlign: 'right',
            title: 'Goals',
          },
        ]}
      </Block>
    );

    const Boilerplate = () => (
      <Block background="light">
        {[
          {
            content:
              'The Taquito team has created a small sample project that checks and displays XTZ balance. Developers are invited to use this as a starting point by simply forking the [Taquito Boilerplate](https://github.com/ecadlabs/taquito-boilerplate) project in GitHub.',
            title: 'Boilerplate App',
          },
        ]}
      </Block>
    );

    const CIBadging = () => (
      <Block background="dark">
        {[
          {
            content:
              'The CII (Core Infrastructure Initiative) badging program was created by the Linux Foundation in response to previous security issues in open-source projects. We are committed to follow these best practices and earn/maintain our CII Badges.',
            title: 'Participation in CII Badging Program',
            image: `${baseUrl}img/cii_badge.png`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );


    const Features = () => {
      return (<Block layout="fourColumn">
        {[
          {
            content: 'Hit the ground running using & contributing to the library quickly: Taquito is written in an idiomatic TypeScript style, and includes a set of ready-made React components.',
            image: `${baseUrl}img/tap.svg`,
            imageAlign: 'top',
            title: 'Easy to Use',
          },
          {
            content: 'Perfect for any JavaScript project on the front- or back-end with minimal dependencies, Taquito has no reliance on any stack by default, except Tezos node.',
            image: `${baseUrl}img/suitecase.svg`,
            imageAlign: 'top',
            title: 'Portable',
          },
          {
            content: 'Taquito comes complete with a well-documented API using TypeDoc, nightly and continuous integration tests against the Nomadic Labs Tezos node & versioned releases published to npmjs.org.',
            image: `${baseUrl}img/tools.svg`,
            imageAlign: 'top',
            title: 'Well-Supported',
          },
        ]}
      </Block>)
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features></Features>
          <CIBadging></CIBadging>
          <Boilerplate></Boilerplate>
        </div>
      </div>
    );
  }
}

Index.description = 'a TypeScript library suite made available as set of npm packages aiming to make building on top of Tezos easier and more enjoyable.'

module.exports = Index;
