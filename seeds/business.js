
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('business').del()
    .then(function () {
      // Inserts seed entries
      return knex('business').insert([
        {
          image: "https://img.cutenesscdn.com/640/ppds/657c9696-52cd-4435-b491-60b14d145141.jpg", 
          name: "HNS Property Services", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-505-6535", 
          website:"www.hnspropertyservices.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        
        {
          image: "https://www.downloadfeast.com/wp-content/uploads/2016/03/selfie.jpg", 
          name: "Business #2", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-555-5535", 
          website:"www.google.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        {
          image: "https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png", 
          name: "Business #3", 
          address:"Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-333-3335", 
          website:"www.google.com", 
          category:"cleaning",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1512148994695.png", 
          name: "Impeccable Electric", 
          address: "Parker,Colorado 80134", 
          zipcode: "80134", 
          number:"303-718-3112", 
          website:"none", 
          category:"electric",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://startupnation.com/wp-content/uploads/2016/06/Screen-Shot-2017-05-25-at-12.40.53-PM.png", 
          name: "HNS Concrete", 
          address: "Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-290-7184", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        {
          image: "https://www.edx.org/sites/default/files/course/image/featured-card/business-immersion-illustration_318x210.jpg", 
          name: "Business #4", 
          address: "Centennial, Colorado 80015", 
          zipcode: "80015", 
          number:"720-222-2222", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://dsx.weather.com/util/image/w/320x180_10day_forecast_teaser_0.jpg?v=at&w=320&h=180&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0", 
          name: "VCT Construction", 
          address: "Colorado Springs, Colorado 80927", 
          zipcode: "80927", 
          number:"720-878-8683", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
    
        {
          image: "https://dsx.weather.com/util/image/w/eshima1.jpeg?v=at&w=1280&h=720&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0", 
          name: "VCT Painting ", 
          address: "Parker, Colorado 80134", 
          zipcode: "80134", 
          number:"303-246-6064", 
          website:"none", 
          category:"construction",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        },
        
        {
          image: "https://wwwcache.wral.com/asset/weather/2018/09/03/17815646/40602485_1792560284124355_1968296719057682432_o-DMID1-5g05cunm2-640x360.jpg", 
          name: "Open Country Septic", 
          address: "Kiowa, CO 80117", 
          zipcode: "80117", 
          number: " 303-638-7097", 
          website: "none", 
          category: "Other",
          hours: "9am - 5pm",
          summary: "The most obvious pattern that the maps show is a global one: vegetation greenness is high around the equator all year long, where temperatures, rainfall and sunlight are abundant. Between the equator and the poles, the vegetation greenness rises and falls as the seasons change."
          
        }
      

      ]);
    });
};
