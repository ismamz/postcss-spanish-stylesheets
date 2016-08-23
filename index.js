var postcss = require('postcss');

module.exports = postcss.plugin('postcss-spanish-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // Properties
            decl.prop = decl.prop.replace('fondo', 'background');
            decl.prop = decl.prop.replace('borde', 'border');
            decl.prop = decl.prop.replace('borde-inferior', 'border-bottom');
            decl.prop = decl.prop.replace('borde-superior', 'border-top');
            decl.prop = decl.prop.replace('borde-izquierdo', 'border-left');
            decl.prop = decl.prop.replace('borde-derecho', 'border-right');
            decl.prop = decl.prop.replace('contenido', 'content');
            decl.prop = decl.prop.replace('puntero', 'cursor');
            decl.prop = decl.prop.replace('filtro', 'filter');
            decl.prop = decl.prop.replace('float', 'float');
            decl.prop = decl.prop.replace('tipografia', 'font-family');
            decl.prop = decl.prop.replace('tipografia', 'font-family');
            decl.prop = decl.prop.replace('ancho', 'width');
            decl.prop = decl.prop.replace('alto', 'height');
            decl.prop = decl.prop.replace('redondeado', 'border-radius');
            decl.prop = decl.prop.replace('interlineado', 'line-height');
            decl.prop = decl.prop.replace('espaciado', 'letter-spacing');
            decl.prop = decl.prop.replace('margen', 'margin');
            decl.prop = decl.prop.replace('margen-superior', 'margin-top');
            decl.prop = decl.prop.replace('margen-inferior', 'margin-bottom');
            decl.prop = decl.prop.replace('margen-izquierdo', 'margin-left');
            decl.prop = decl.prop.replace('margen-derecho', 'margin-right');
            decl.prop = decl.prop.replace('margen-derecho', 'margin-right');
            decl.prop = decl.prop.replace('ancho-maximo', 'max-width');
            decl.prop = decl.prop.replace('ancho-minimo', 'min-width');
            decl.prop = decl.prop.replace('alto-maximo', 'max-height');
            decl.prop = decl.prop.replace('alto-minimo', 'min-height');
            decl.prop = decl.prop.replace('alto-minimo', 'min-height');
            decl.prop = decl.prop.replace('desborda', 'overflow');
            decl.prop = decl.prop.replace('posicion', 'position');
            decl.prop = decl.prop.replace('tabla', 'table');
            decl.prop = decl.prop.replace('capa', 'z-index');
            decl.prop = decl.prop.replace('visibilidad', 'visibility');
            decl.prop = decl.prop.replace('animacion', 'animation');
            decl.prop = decl.prop.replace('animacion-retraso', 'animation-delay');
            decl.prop = decl.prop.replace('animacion-direccion', 'animation-direction');
            decl.prop = decl.prop.replace('animacion-duracion', 'animation-duration');
            decl.prop = decl.prop.replace('sombra-caja', 'box-shadow');
            decl.prop = decl.prop.replace('sombra-texto', 'text-shadow');
            decl.prop = decl.prop.replace('estilo-lista', 'list-style');
            decl.prop = decl.prop.replace('transparencia', 'opacity');
            decl.prop = decl.prop.replace('transicion', 'transition');
            decl.prop = decl.prop.replace('transicion-duracion', 'transition-duration');
            decl.prop = decl.prop.replace('transicion-propiedad', 'transition-property');
            decl.prop = decl.prop.replace('transicion-propiedad', 'transition-property');
            decl.prop = decl.prop.replace('indentacion', 'text-indent');

            // Position Values and Properties
            decl.value = decl.value.replace('izquierda', 'left');
            decl.prop = decl.prop.replace('izquierda', 'left');
            decl.value = decl.value.replace('derecha', 'right');
            decl.prop = decl.prop.replace('derecha', 'right');
            decl.value = decl.value.replace('arriba', 'top');
            decl.prop = decl.prop.replace('arriba', 'top');
            decl.value = decl.value.replace('abajo', 'bottom');
            decl.prop = decl.prop.replace('abajo', 'bottom');

            // Values
            decl.value = decl.value.replace('subrayado', 'underline');
            decl.value = decl.value.replace('manito', 'pointer');
            decl.value = decl.value.replace('mayuscula', 'uppercase');
            decl.value = decl.value.replace('centro', 'center');
            decl.value = decl.value.replace('medio', 'middle');
            decl.value = decl.value.replace('ninguna', 'none');
            decl.value = decl.value.replace('heredar', 'inherit');
            decl.value = decl.value.replace('heredar', 'inherit');
            decl.value = decl.value.replace('repetir', 'repeat');
            decl.value = decl.value.replace('negrita', 'bold');
            decl.value = decl.value.replace('negrita', 'bold');
            decl.value = decl.value.replace('transparente', 'transparent');
            decl.value = decl.value.replace('fija', 'fixed');
            decl.value = decl.value.replace('absoluta', 'absolute');
            decl.value = decl.value.replace('relativa', 'relative');
            decl.value = decl.value.replace('colapsar', 'collapse');
            decl.value = decl.value.replace('oculto', 'hidden');

            if (decl.value.indexOf('!importantisimo') >= 0) {
                decl.value = decl.value.replace(/\s*!importantisimo\s*/, '');
                decl.important = true;
            }
        });
    };
});
