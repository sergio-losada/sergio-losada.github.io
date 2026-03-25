#!/bin/bash
# build-deploy.sh

set -e

# Ir a la carpeta del proyecto Angular
cd source || exit

# Build produccion apuntando a ../docs
ng build --configuration production --output-path ../docs --base-href ./

# Mover contenido de docs/browser a docs/
if [ -d ../docs/browser ]; then
  mv ../docs/browser/* ../docs/
  rm -rf ../docs/browser
fi

# Duplicar build para /en
mkdir -p ../docs/en
find ../docs -mindepth 1 -maxdepth 1 ! -name en -exec cp -R {} ../docs/en/ \;

# Ajustar SEO base de la version en ingles
EN_INDEX="../docs/en/index.html"
if [ -f "$EN_INDEX" ]; then
  sed -i 's|<html lang="es">|<html lang="en">|' "$EN_INDEX"
  sed -i 's|<title>Sergio Losada</title>|<title>Sergio Losada - Software Engineer</title>|' "$EN_INDEX"
  sed -i 's|Portafolio de Sergio Losada, Ingeniero de Software especializado en Desarrollo Web y Arquitecturas Cloud.|Portfolio of Sergio Losada, Software Engineer specialized in Web Development and Cloud Architectures.|g' "$EN_INDEX"
  sed -i 's|<meta property="og:title" content="Sergio Losada - Ingeniero de Software">|<meta property="og:title" content="Sergio Losada - Software Engineer">|' "$EN_INDEX"
  sed -i 's|<meta name="twitter:title" content="Sergio Losada - Ingeniero de Software">|<meta name="twitter:title" content="Sergio Losada - Software Engineer">|' "$EN_INDEX"
  sed -i 's|<meta property="og:url" content="https://sergio-losada.github.io/">|<meta property="og:url" content="https://sergio-losada.github.io/en/">|' "$EN_INDEX"
  sed -i 's|<link rel="canonical" href="https://sergio-losada.github.io/">|<link rel="canonical" href="https://sergio-losada.github.io/en/">|' "$EN_INDEX"
fi

# Crear archivo .nojekyll
touch ../docs/.nojekyll

echo "Build completado y listo en /docs y /docs/en"
