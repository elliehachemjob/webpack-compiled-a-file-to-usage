const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//webpack acceped an object with properties
module.exports = {
  output: {
    // first property path where to send files when they are bundled
    // /__dirname => exact path
    path: path.join(__dirname, "/dist"),
    //2nd property  : file name
    filename: "index.bundle.js",
  },

  //developerment server to see updates as we work
  devServer: {
    port: 3010,
    watchContentBase: true,
  },
  //where webpack takes files and compiled them to a browwser web bundle
  module: {
    rules: [
      //to identify files and what to do with them
      {
        //what files to match here js and jsx we need to add tsx if we want tsx
        test: /\.(js|jsx|ts|tsx)$/,
        //exclude the node modules
        exclude: /node_modules/,
        //when you find the files load them to webpack using babel loader
        use: {
          loader: "babel-loader",
        },
      },
      {
        //to handle sass files
        test: /\.scss$/,
        //when we find those f iles we will use those loaders to convert and add them to webpack bundle
        // the MiniCssExtractPlugin  extracts the css from bundle so at end we have logic and css and html index all seperated from each others
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
