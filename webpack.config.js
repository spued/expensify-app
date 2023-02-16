const path = require("path");
const TerserPlugin = require( 'terser-webpack-plugin-legacy' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {

    const isProduction = env == 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    //console.log('env', env);
    return {
        entry : "./src/app.js",
        output : {
            "path" : path.join(__dirname + '/public'),
            "filename" : "bundle.js"
        },
        module: {
            rules : [
                {
                    loader : 'babel-loader',
                    test : /\.js$/,
                    exclude : /node_modules/
            },
            {
                test:/\.s?css$/,
                use: CSSExtract.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader : 'css-loader',
                            options: {
                                sourceMap : true
                            }
                        }, 
                        { 
                            loader : 'sass-loader',
                            options: {
                                sourceMap : true
                            }
                        }
                    ]})
            }]
        },
        plugins : [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname + '/public'),
            historyApiFallback: true
        },
        /* optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true
                })
            ]
        } */
    }
};

//Loader
