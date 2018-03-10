/*!
 * @pixi/filter-simple-lightmap - v2.6.0
 * Compiled Wed, 28 Feb 2018 22:04:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
import{utils,Filter}from"pixi.js";var vertex="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",fragment="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",SimpleLightmapFilter=function(t){function e(e,o,r){void 0===o&&(o=0),void 0===r&&(r=1),t.call(this,vertex,fragment),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=e,this.color=o}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var o={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return e.prototype.apply=function(t,e,o,r){this.uniforms.dimensions[0]=e.sourceFrame.width,this.uniforms.dimensions[1]=e.sourceFrame.height,t.applyFilter(this,e,o,r)},o.texture.get=function(){return this.uniforms.uLightmap},o.texture.set=function(t){this.uniforms.uLightmap=t},o.color.set=function(t){var e=this.uniforms.ambientColor;"number"==typeof t?(utils.hex2rgb(t,e),this._color=t):(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._color=utils.rgb2hex(e))},o.color.get=function(){return this._color},o.alpha.get=function(){return this.uniforms.ambientColor[3]},o.alpha.set=function(t){this.uniforms.ambientColor[3]=t},Object.defineProperties(e.prototype,o),e}(Filter);export{SimpleLightmapFilter};
//# sourceMappingURL=filter-simple-lightmap.es.js.map
