import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import jsconfigPaths from 'vite-jsconfig-paths'
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl', '**/*.mp4'],
  plugins: [ jsconfigPaths(), remix({
    routes(defineRoutes) {
      return defineRoutes(route => {
        route('/', 'routes/home/route.js', { index: true });
        route('contact', 'routes/contact/route.js');
        route('uses', 'routes/uses/route.js');
        route('api/set-theme', 'routes/api.set-theme.js');
        route('projects/guestly', 'routes/projects.guestly/route.js');
        route('projects/lyvecom', 'routes/projects.lyvecom/route.js');
        route('projects/fitmatch', 'routes/projects.fitmatch/route.js');
        route('projects/connectdevs', 'routes/projects.connectdevs/route.js');
        route('*', 'routes/$.jsx');
      });
    },
  }), netlifyPlugin()],
});
