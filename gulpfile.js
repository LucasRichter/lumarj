var concat = require( 'gulp-concat' )
var rename = require( 'gulp-rename' )
var uglify = require( 'gulp-uglify' )
var pug = require( 'gulp-pug' )
var sass = require( 'gulp-sass' )
var image = require( 'gulp-image' )
var gulp = require( 'gulp' )
var child = require( 'child_process' )
var fs = require( 'fs' )
var clean = require( 'gulp-clean' )
var plumber = require( 'gulp-plumber' )

const cleanPath = ( path ) => {
  return gulp.src( path, { read: false } )
  .pipe( clean({ force: true }) )
}

gulp.task( 'clean-pug', () => cleanPath( './dest/*.html' ) )

gulp.task( 'js', () => {
  return gulp.src( './src/js/**/*.js' )
    .pipe( gulp.dest( 'dest/js' ) )
} )

gulp.task( 'views', [ 'clean-pug' ], () => {
  return gulp.src( './src/views/*.pug' )
  .pipe( plumber() )
  .pipe( pug() )
  .pipe( gulp.dest( 'dest' ) )
} )

gulp.task( 'sass', () => {
  return gulp.src( './src/css/main.sass' )
    .pipe( sass().on('error', sass.logError) )
    .pipe( gulp.dest('./dest/css') )
} )

gulp.task( 'image', () => {
  return gulp.src('./src/image/**/*')
    .pipe( gulp.dest( './dest/image' ) )
} )

gulp.task( 'fonts', () => {
  return gulp.src( './src/fonts/*' )
  .pipe( gulp.dest( './dest/fonts/' ) )
} )

gulp.task( 'watch', () => {
  gulp.watch( './src/css/**/*.sass', ['sass'] )
  gulp.watch( './src/js/**/*.js', ['js'] )
  gulp.watch( './src/image/**/*', ['image'] )
  gulp.watch( './src/views/**/*.pug', [ 'views' ] )
} )

gulp.task( 'default', [ 'js', 'sass', 'views', 'image', 'watch', 'fonts' ] )
