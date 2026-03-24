// vite.config.js
import { defineConfig } from "file:///C:/Users/abdul/OneDrive/Documents/Projects/FixMyCity/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/abdul/OneDrive/Documents/Projects/FixMyCity/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/abdul/OneDrive/Documents/Projects/FixMyCity/node_modules/vite-plugin-pwa/dist/index.js";
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
    name: "FixMyCity - AI-Powered Civic Platform",
    short_name: "FixMyCity",
    description: "Application to report civic issues around you",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmR1bFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcRml4TXlDaXR5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmR1bFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcUHJvamVjdHNcXFxcRml4TXlDaXR5XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hYmR1bC9PbmVEcml2ZS9Eb2N1bWVudHMvUHJvamVjdHMvRml4TXlDaXR5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuY29uc3QgbWFuaWZlc3RGb3JQbHVnaW4gPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiBcInByb21wdFwiLFxyXG4gIGluY2x1ZGVBc3NldHM6IFtcclxuICAgIFwibG9nby5wbmdcIixcclxuICAgIFwibG9nby5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng0OC5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng3Mi5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng5Ni5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbngxMjgucG5nXCIsXHJcbiAgICBcIm1hc2thYmxlX2ljb254MTkyLnBuZ1wiLFxyXG4gICAgXCJtYXNrYWJsZV9pY29ueDM4NC5wbmdcIixcclxuICAgIFwibWFza2FibGVfaWNvbng1MTIucG5nXCIsXHJcbiAgICBcIm1hc2thYmxlX2ljb24ucG5nXCIsXHJcbiAgXSxcclxuICBtYW5pZmVzdDoge1xyXG4gICAgbmFtZTogXCJGaXhNeUNpdHkgLSBBSS1Qb3dlcmVkIENpdmljIFBsYXRmb3JtXCIsXHJcbiAgICBzaG9ydF9uYW1lOiBcIkZpeE15Q2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwbGljYXRpb24gdG8gcmVwb3J0IGNpdmljIGlzc3VlcyBhcm91bmQgeW91XCIsXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3g0OC5wbmdcIixcclxuICAgICAgICBzaXplczogXCI0OHg0OFwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3g3Mi5wbmdcIixcclxuICAgICAgICBzaXplczogXCI3Mng3MlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3g5Ni5wbmdcIixcclxuICAgICAgICBzaXplczogXCI5Nng5NlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3gxMjgucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiMTI4eDEyOFwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3gxOTIucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3gzODQucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiMzg0eDM4NFwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9tYXNrYWJsZV9pY29uX3g1MTIucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgcHVycG9zZTogXCJhbnkgbWFza2FibGVcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0aGVtZV9jb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiNEN0ZGRkVcIixcclxuICAgIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxyXG4gICAgc2NvcGU6IFwiL1wiLFxyXG4gICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgIG9yaWVudGF0aW9uOiBcInBvcnRyYWl0XCIsXHJcbiAgfSxcclxuICBkZXZPcHRpb25zOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCksIFZpdGVQV0EobWFuaWZlc3RGb3JQbHVnaW4pXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFYsU0FBUyxvQkFBb0I7QUFDelgsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUd4QixJQUFNLG9CQUFvQjtBQUFBLEVBQ3hCLGNBQWM7QUFBQSxFQUNkLGVBQWU7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixrQkFBa0I7QUFBQSxJQUNsQixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLEVBQ1g7QUFDRjtBQUNBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxpQkFBaUIsQ0FBQztBQUMvQyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
