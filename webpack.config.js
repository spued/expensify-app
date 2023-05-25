const path = require("path");
const webpack = require("webpack")
//const TerserPlugin = require( 'terser-webpack-plugin-legacy' );
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path:'.env.test' })
} else if(process.env.NODE_ENV == 'development') {
    require('dotenv').config({ path:'.env.development' })
}

module.exports = (env) => {

    const isProduction = env == 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    //console.log('env', env);
    
    return {
        entry : "./src/app.js",
        output : {
            "path" : path.resolve(__dirname, 'public/'),
            "filename" : "bundle.js"
        },
        module: {
            rules : [
                {
                    test : /\.js$/,
                    exclude : /node_modules/,
                    loader : 'babel-loader'
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
            CSSExtract,
            /* new TerserPlugin({
                sourceMap: true
            }), */
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL' : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID' : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_FIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID' : JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID' : JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: 'public',
            historyApiFallback: true,
            watchContentBase: true
            //publicPath: '/'
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
