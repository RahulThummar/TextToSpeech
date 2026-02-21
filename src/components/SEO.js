import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical }) => {
  const fullTitle = title ? `${title} | Speech Project` : 'Speech Project – AI Speech Tools';
  const siteUrl = 'https://speech-project-base.vercel.app'; // Placeholder domain

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
