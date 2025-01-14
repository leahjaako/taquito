const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('quick_start.html', this.props.language)}>
              Quick Start
            </a>
            <a href="/react-storybook">
              Storybook
            </a>
            <a href="/typedoc">
              TypeDoc reference
            </a>
            {/* <a href={this.docUrl('faq.html', this.props.language)}>
              FAQ
            </a> */}
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://stackoverflow.com/questions/tagged/taquito"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow</a>
            <a
              href="https://twitter.com/TezosTaquito"
              target="_blank"
              rel="noreferrer noopener">
              Twitter</a>
            <a
              href={this.props.config.repoUrl + '/blob/master/code-of-conduct.md'}
              target="_blank"
              rel="noreferrer noopener">
              Code of Conduct</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
          <div>
            <h5>Contact</h5>
            <a
              href={this.props.config.repoUrl + '/issues'}
              target="_blank"
              rel="noreferrer noopener">
              Report issues</a>
            <a
              href={this.props.config.repoUrl + '/blob/master/CONTRIBUTING.md'}
              target="_blank"
              rel="noreferrer noopener">
              Contribute</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer >
    );
  }
}

module.exports = Footer;
