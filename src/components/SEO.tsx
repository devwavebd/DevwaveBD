import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "DevWave BD - Premium WordPress solutions. We specialize in speed optimization, security, and custom WooCommerce development to scale your business.",
  keywords = "WordPress Development, Speed Optimization, WooCommerce Expert, WP Security, DevWave BD, Web Development Bangladesh",
  image = "https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Artboard-1-e1778821694516.png",
  canonical = "https://devwavebd.com",
  type = "website"
}) => {
  const siteName = "DevWave BD";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Premium WordPress Solutions`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <link rel="icon" type="image/png" href="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/028af78d-9176-47d7-bc31-d5091af8941c-e1778820234731.png" />
      <link rel="apple-touch-icon" href="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/028af78d-9176-47d7-bc31-d5091af8941c-e1778820234731.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Other Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DevWave BD" />
    </Helmet>
  );
};

export default SEO;
