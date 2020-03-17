module.exports = {
    modifyWebpack: config => {
        const newConfig = {
          ...config,
          module: {
            rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    // presets: [                  
                    //     [
                    //         "@babel/preset-env",
                    //         {
                    //           "targets": {
                    //             "esmodules": true
                    //           }
                    //         }
                    //       ],                      
                    //     "@babel/preset-react"
                    // ],
                    "presets": ["cra-universal", "@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        "lodash",
                        // require("@babel/plugin-proposal-object-rest-spread"),
                        "@babel/plugin-transform-modules-commonjs",
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-class-properties",
                        "dynamic-import-node",
                        "react-loadable/babel",
                        [
                          "file-loader",
                          {
                            "name": "[hash].[ext]",
                            "extensions": ["png", "jpg", "jpeg", "gif", "svg", 'ico'],
                            "publicPath": "/public",
                            "outputPath": "/public",
                            "context": "",
                            "limit": 0,
                            "emitFile": false
                          }
                        ]
                    ]
                }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader"
                ]
            },
            {
                test: /\.css/,
                use: [
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                // "sass-loader"
                ]
            },
            {
                test: /\.svg/,
                use: {
                loader: "svg-url-loader",
                options: {}
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
             }
            ]
        }
        };
        return newConfig;
      }
}