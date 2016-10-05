var gulp = require('gulp');
var tsc = require('gulp-typescript');
var Config = require('./gulpfile.config');
var config = new Config();
var clean = require('gulp-clean');
var del = require('del');
var webpack = require("webpack-stream");

gulp.task('clean', function () {
    var tsGeneratedFiles = [
        'src/lib/index.d.ts',
        'src/lib/index.js',
        'src/lib/add-or-update.d.ts',
        'src/lib/append-to-body-async.d.ts',
        'src/lib/create-element.d.ts',
        'src/lib/extend-css-async.d.ts',
        'src/lib/form-encode.d.ts',
        'src/lib/guid.d.ts',
        'src/lib/pluck-out.d.ts',
        'src/lib/pluck.d.ts',
        'src/lib/remove-element.d.ts',
        'src/lib/set-opacity-async.d.ts',
        'src/lib/target-value.d.ts',
        'src/lib/translate-x.js',
        'src/lib/add-or-update.js',
        'src/lib/append-to-body-async.js',
        'src/lib/create-element.js',
        'src/lib/extend-css-async.js',
        'src/lib/form-encode.js',
        'src/lib/guid.js',
        'src/lib/pluck-out.js',
        'src/lib/pluck.js',
        'src/lib/remove-element.js',
        'src/lib/set-opacity-async.js',
        'src/lib/target-value.js',
        'src/lib/translate-x.js'
    ];

    return gulp.src(tsGeneratedFiles, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    var sourceTsFiles = [
        './src/lib/src/index.ts',
        './src/lib/src/add-or-update.ts',
        './src/lib/src/append-to-body-async.ts',
        './src/lib/src/create-element.ts',
        './src/lib/src/extend-css-async.ts',
        './src/lib/src/form-encode.ts',
        './src/lib/src/guid.ts',
        './src/lib/src/pluck-out.ts',
        './src/lib/src/pluck.ts',
        './src/lib/src/remove-element.ts',
        './src/lib/src/set-opacity-async.ts',
        './src/lib/src/target-value.ts',
        './src/lib/src/translate-x.ts',
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(tsc(config.tsConfig));

    tsResult.dts.pipe(gulp.dest('./src/lib'));
    return tsResult.js
                    .pipe(gulp.dest('./src/lib'));
});

gulp.task('watch', function () {
    gulp.watch(
        [
            './src/lib/src/index.ts',
            './src/lib/src/add-or-update.ts',
            './src/lib/src/append-to-body-async.ts',
            './src/lib/src/create-element.ts',
            './src/lib/src/extend-css-async.ts',
            './src/lib/src/form-encode.ts',
            './src/lib/src/guid.ts',
            './src/lib/src/pluck-out.ts',
            './src/lib/src/pluck.ts',
            './src/lib/src/remove-element.ts',
            './src/lib/src/set-opacity-async.ts',
            './src/lib/src/translate-x.ts'
        ],
        ['clean','compile']);
});

gulp.task('default', ['clean', 'compile', 'watch']);


