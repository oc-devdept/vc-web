const path = require("path");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  webpack(config) {
    config.resolve.alias["Components"] = path.join(__dirname, "components");
    config.resolve.alias["Store"] = path.join(__dirname, "redux/store");
    config.resolve.alias["Ducks"] = path.join(__dirname, "redux/ducks");
    config.resolve.alias["Api"] = path.join(__dirname, "api");
    config.resolve.alias["Styles"] = path.join(__dirname, "assets/styles");
    config.resolve.alias["Static"] = path.join(__dirname, "static");    
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        imagesFolder: "images",
        imagesName: "[name]-[hash].[ext]",
        handleImages: ["jpeg", "jpg", "png", "svg", "webp", "gif", "ico"],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        webp: {
          preset: "default",
          quality: 75,
        },
      },
    ],
    [withFonts]
  ],
  nextConfig
);
