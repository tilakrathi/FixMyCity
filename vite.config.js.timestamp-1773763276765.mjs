// vite.config.js
import { defineConfig } from "file:///C:/Users/abdul/Downloads/mobilEASE/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/abdul/Downloads/mobilEASE/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/abdul/Downloads/mobilEASE/node_modules/vite-plugin-pwa/dist/index.js";
var manifestForPlugin = {
  registerType: "prompt",
  includeAssets: [
    "logo.png",
    "logo.png",
    "maskable_iconx48.png",
    "maskable_iconx72.png",
    "maskable_iconx96.png",
    "maskable_iconx128.png",
    "maskable_iconx192.png",
    "maskable_iconx384.png",
    "maskable_iconx512.png",
    "maskable_icon.png"
  ],
  manifest: {
    name: "FixMyCity – Report & Track Issues",
    short_name: "FixMyCity",
    description: "Application to report & track issues",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/maskable_icon_x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#212121",
    background_color: "#D7FFFE",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  },
  devOptions: {
    enabled: true
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmR1bFxcXFxEb3dubG9hZHNcXFxcbW9iaWxFQVNFXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmR1bFxcXFxEb3dubG9hZHNcXFxcbW9iaWxFQVNFXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hYmR1bC9Eb3dubG9hZHMvbW9iaWxFQVNFL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuY29uc3QgbWFuaWZlc3RGb3JQbHVnaW4gPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiBcInByb21wdFwiLFxyXG4gIGluY2x1ZGVBc3NldHM6IFtcclxuICAgIFwibG9nby5wbmdcIixcclxuICAgIFwibG9nby5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng0OC5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng3Mi5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng5Ni5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbngxMjgucG5nXCIsXHJcbiAgICBcIm1hc2thYmxlX2ljb254MTkyLnBuZ1wiLFxyXG4gICAgXCJtYXNrYWJsZV9pY29ueDM4NC5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng1MTIucG5nXCIsXHJcbiAgICBcIm1hc2thYmxlX2ljb24ucG5nXCIsXHJcbiAgXSxcclxuICBtYW5pZmVzdDoge1xyXG4gICAgbmFtZTogXCJNb2JpbEVBU0UgLSBNb2JpbGUgRWZmaWNpZW50IEFzc2lzdGFuY2UgZm9yIFRyYWZmaWNcIixcclxuICAgIHNob3J0X25hbWU6IFwiTW9iaWxFQVNFXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBcHBsaWNhdGlvbiB0byByZXBvcnQgdHJhZmZpYyBpc3N1ZXMgYXJvdW5kIHlvdVwiLFxyXG4gICAgaWNvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcclxuICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94NDgucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiNDh4NDhcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94NzIucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiNzJ4NzJcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94OTYucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiOTZ4OTZcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94MTI4LnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjEyOHgxMjhcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94MTkyLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94Mzg0LnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjM4NHgzODRcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCIvbWFza2FibGVfaWNvbl94NTEyLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWVfY29sb3I6IFwiIzIxMjEyMVwiLFxyXG4gICAgYmFja2dyb3VuZF9jb2xvcjogXCIjRDdGRkZFXCIsXHJcbiAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgIHNjb3BlOiBcIi9cIixcclxuICAgIHN0YXJ0X3VybDogXCIvXCIsXHJcbiAgICBvcmllbnRhdGlvbjogXCJwb3J0cmFpdFwiLFxyXG4gIH0sXHJcbiAgZGV2T3B0aW9uczoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBWaXRlUFdBKG1hbmlmZXN0Rm9yUGx1Z2luKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtTLFNBQVMsb0JBQW9CO0FBQy9ULE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTSxvQkFBb0I7QUFBQSxFQUN4QixjQUFjO0FBQUEsRUFDZCxlQUFlO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2Isa0JBQWtCO0FBQUEsSUFDbEIsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNYO0FBQ0Y7QUFDQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFFBQVEsaUJBQWlCLENBQUM7QUFDL0MsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
