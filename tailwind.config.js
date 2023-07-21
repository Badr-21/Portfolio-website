/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         colors: {
            PictonBlue: "#00ABE4",
            SkyBlue: "#75CEEF",
            AliceBlue: "#F4F8FD",
            RichBlack: "#00090B",
            DavysGray: "#4F4F4F",
         },
      },
   },
   plugins: [],
};
