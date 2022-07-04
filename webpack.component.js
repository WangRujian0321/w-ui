const path = require ('path');
const glob = require ('glob');
const { VueLoaderPlugin } = require('vue-loader');
// 引入清除打包后文件的插件（最新版的需要解构，不然会报不是构造函数的错，而且名字必须写CleanWebpackPlugin）
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCssExtractPlugin = require ('mini-css-extract-plugin');
const list = {
    'index': './components/wui.js',
}
async function makeList (dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files: ', files);
    for (let file of files){
        const component = file.split(/[/.]/)[2];
        list[component] = `./${file}`;
    }
    console.log(list);
    return list;
}

makeList('components/lib', list)

module.exports = {
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
        },
    },
    devtool: "eval",
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: "wui",
        libraryTarget: 'umd'
    },
    plugins:[
        new VueLoaderPlugin(),new CleanWebpackPlugin(), new miniCssExtractPlugin(),
    ],
    mode: "development",
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false,
                            },
                        },
                    },
                ],
            },{
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader, // 使用miniCssExtractPlugin.loader代替style-loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require ('dart-sass'),
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
        ]
    }
}
