// server.js
// where your node app starts

// init project
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.set('views', './views');
app.set('view engine', 'ejs');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = './museums.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

app.get('/museum/:id', function(req, res) {  
  db.all('SELECT * from museums where id = ? limit 1', req.params.id, function(err, rows) {
    if (rows.length==0){
      res.render('404');
    }else{     
		var id = rows[0]['id'];
		var address = rows[0]['address'];
		var description = rows[0]['description'];
		var featurecount = rows[0]['featurecount'];
		var fee = rows[0]['fee'];
		var langtitude = rows[0]['langtitude'];
		var latitude = rows[0]['latitude'];
		var lengthofvisit = rows[0]['lengthofvisit'];
		var museumname = rows[0]['museumname'];
		var phonenum = rows[0]['phonenum'];
		var rank = rows[0]['rank'];
		var rating = rows[0]['rating'];
		var reviewcount = rows[0]['reviewcount'];
		var totalthingstodo = rows[0]['totalthingstodo'];
		var country = rows[0]['country'];
		var state = rows[0]['state'];
		var rankpercentage = rows[0]['rankpercentage'];
		var ancient_ruins = rows[0]['ancient_ruins'];
		var architectural_buildings = rows[0]['architectural_buildings'];
		var arenas_stadiums = rows[0]['arenas_stadiums'];
		var art_galleries = rows[0]['art_galleries'];
		var art_museums = rows[0]['art_museums'];
		var auto_race_tracks = rows[0]['auto_race_tracks'];
		var ballets = rows[0]['ballets'];
		var battlefields = rows[0]['battlefields'];
		var biking_trails = rows[0]['biking_trails'];
		var bodies_of_water = rows[0]['bodies_of_water'];
		var bridges = rows[0]['bridges'];
		var castles = rows[0]['castles'];
		var cemeteries = rows[0]['cemeteries'];
		var childrens_museums = rows[0]['childrens_museums'];
		var city_tours = rows[0]['city_tours'];
		var classes_workshops = rows[0]['classes_workshops'];
		var coffeehouses = rows[0]['coffeehouses'];
		var concerts_shows = rows[0]['concerts_shows'];
		var cultural_tours = rows[0]['cultural_tours'];
		var educational_sites = rows[0]['educational_sites'];
		var factory_tours = rows[0]['factory_tours'];
		var flea_street_markets = rows[0]['flea_street_markets'];
		var food_drink = rows[0]['food_drink'];
		var fun_games = rows[0]['fun_games'];
		var gardens = rows[0]['gardens'];
		var geologic_formations = rows[0]['geologic_formations'];
		var gift_specialty_shops = rows[0]['gift_specialty_shops'];
		var government_buildings = rows[0]['government_buildings'];
		var historic_sites = rows[0]['historic_sites'];
		var historic_walking_areas = rows[0]['historic_walking_areas'];
		var historical_heritage_tours = rows[0]['historical_heritage_tours'];
		var history_museums = rows[0]['history_museums'];
		var islands = rows[0]['islands'];
		var lessons_workshops = rows[0]['lessons_workshops'];
		var libraries = rows[0]['libraries'];
		var lighthouses = rows[0]['lighthouses'];
		var literary_art_music_tours = rows[0]['literary_art_music_tours'];
		var lookouts = rows[0]['lookouts'];
		var military_bases_facilities = rows[0]['military_bases_facilities'];
		var military_museums = rows[0]['military_museums'];
		var mines = rows[0]['mines'];
		var monuments_statues = rows[0]['monuments_statues'];
		var movie_theaters = rows[0]['movie_theaters'];
		var museums = rows[0]['museums'];
		var national_parks = rows[0]['national_parks'];
		var natural_history_museums = rows[0]['natural_history_museums'];
		var nature_parks = rows[0]['nature_parks'];
		var nature_wildlife_areas = rows[0]['nature_wildlife_areas'];
		var neighborhoods = rows[0]['neighborhoods'];
		var night_tours = rows[0]['night_tours'];
		var nightlife = rows[0]['nightlife'];
		var observation_decks_towers = rows[0]['observation_decks_towers'];
		var observatories_planetariums = rows[0]['observatories_planetariums'];
		var other_fun_games = rows[0]['other_fun_games'];
		var other_outdoor_activities = rows[0]['other_outdoor_activities'];
		var outdoor_activities = rows[0]['outdoor_activities'];
		var piers_boardwalks = rows[0]['piers_boardwalks'];
		var playgrounds = rows[0]['playgrounds'];
		var points_of_interest_landmarks = rows[0]['points_of_interest_landmarks'];
		var private_tours = rows[0]['private_tours'];
		var sacred_religious_sites = rows[0]['sacred_religious_sites'];
		var scenic_railroads = rows[0]['scenic_railroads'];
		var scenic_walking_areas = rows[0]['scenic_walking_areas'];
		var science_museums = rows[0]['science_museums'];
		var selfguided_tours_rentals = rows[0]['selfguided_tours_rentals'];
		var ships = rows[0]['ships'];
		var shopping = rows[0]['shopping'];
		var sights_landmarks = rows[0]['sights_landmarks'];
		var specialty_museums = rows[0]['specialty_museums'];
		var sports_complexes = rows[0]['sports_complexes'];
		var state_parks = rows[0]['state_parks'];
		var theaters = rows[0]['theaters'];
		var tours = rows[0]['tours'];
		var tramways = rows[0]['tramways'];
		var transportation = rows[0]['transportation'];
		var traveler_resources = rows[0]['traveler_resources'];
		var valleys = rows[0]['valleys'];
		var visitor_centers = rows[0]['visitor_centers'];
		var volcanos = rows[0]['volcanos'];
		var walking_tours = rows[0]['walking_tours'];
		var wineries_vineyards = rows[0]['wineries_vineyards'];
		var zipline_aerial_adventure_parks = rows[0]['zipline_aerial_adventure_parks'];
		var zoos_aquariums = rows[0]['zoos_aquariums'];
		var on_display = rows[0]['on_display'];
		var gift_shop = rows[0]['gift_shop'];
		var rainy_day = rows[0]['rainy_day'];
		var couple_of_hours = rows[0]['couple_of_hours'];
		var all_ages = rows[0]['all_ages'];
		var special_exhibits = rows[0]['special_exhibits'];
		var few_hours = rows[0]['few_hours'];
		var two_hours = rows[0]['two_hours'];
		var exhibits = rows[0]['exhibits'];
		var well_worth_a_visit = rows[0]['well_worth_a_visit'];
		var permanent_collection = rows[0]['permanent_collection'];
		var worth_a_visit = rows[0]['worth_a_visit'];
		var free_admission = rows[0]['free_admission'];
		var audio_guide = rows[0]['audio_guide'];
		var beautiful_building = rows[0]['beautiful_building'];
		var great_collection = rows[0]['great_collection'];
		var information = rows[0]['information'];
		var interesting_exhibits = rows[0]['interesting_exhibits'];
		var entrance_fee = rows[0]['entrance_fee'];
		var great_for_kids = rows[0]['great_for_kids'];
		var interactive_exhibits = rows[0]['interactive_exhibits'];
		var hands_on_activities = rows[0]['hands_on_activities'];
		var great_exhibits = rows[0]['great_exhibits'];
		var great_place_to_visit = rows[0]['great_place_to_visit'];
		var interactive_displays = rows[0]['interactive_displays'];
		var guided_tour = rows[0]['guided_tour'];
		var well_worth_the_visit = rows[0]['well_worth_the_visit'];
		var whole_family = rows[0]['whole_family'];
		var kids_and_adults = rows[0]['kids_and_adults'];
		var traveling_exhibits = rows[0]['traveling_exhibits'];
		var his_life = rows[0]['his_life'];
		var local_history = rows[0]['local_history'];
		var amazing_collection = rows[0]['amazing_collection'];
		var free_entry = rows[0]['free_entry'];
		var worth_the_trip = rows[0]['worth_the_trip'];
		var great_history = rows[0]['great_history'];
		var civil_war = rows[0]['civil_war'];
		var take_your_time = rows[0]['take_your_time'];
		var nice_collection = rows[0]['nice_collection'];
		var interesting_place = rows[0]['interesting_place'];
		var great_museum = rows[0]['great_museum'];
		var for_sale = rows[0]['for_sale'];
		var art_lovers = rows[0]['art_lovers'];
		var artifacts = rows[0]['artifacts'];
		var van_gogh = rows[0]['van_gogh'];
		var audio_tour = rows[0]['audio_tour'];
		var history = rows[0]['history'];
		var galleries = rows[0]['galleries'];
		var works_of_art = rows[0]['works_of_art'];
		var natural_history = rows[0]['natural_history'];
		var self_guided_tour = rows[0]['self_guided_tour'];
		var private_collection = rows[0]['private_collection'];
		var own_pace = rows[0]['own_pace'];
		var sculpture_garden = rows[0]['sculpture_garden'];
		var moving_experience = rows[0]['moving_experience'];
		var three_hours = rows[0]['three_hours'];
		var lots_of_history = rows[0]['lots_of_history'];
		var modern_art = rows[0]['modern_art'];
		var history_buff = rows[0]['history_buff'];
		var admission = rows[0]['admission'];
		var small_museum = rows[0]['small_museum'];
		var step_back_in_time = rows[0]['step_back_in_time'];
		var worth_a_stop = rows[0]['worth_a_stop'];
		var short_film = rows[0]['short_film'];
		var stuffed_animals = rows[0]['stuffed_animals'];
		var walk_around = rows[0]['walk_around'];
		var entry_fee = rows[0]['entry_fee'];
		var great_displays = rows[0]['great_displays'];
		var world_war = rows[0]['world_war'];
		var scavenger_hunt = rows[0]['scavenger_hunt'];
		var across_the_street = rows[0]['across_the_street'];
		var museums2 = rows[0]['museums2'];
		var top_floor = rows[0]['top_floor'];
		var a_lot_of_fun = rows[0]['a_lot_of_fun'];
		var history_lesson = rows[0]['history_lesson'];
		var large_collection = rows[0]['large_collection'];
		var eye_opening = rows[0]['eye_opening'];
		var american_history = rows[0]['american_history'];
		var interesting_artifacts = rows[0]['interesting_artifacts'];
		var early_days = rows[0]['early_days'];
		var rotating_exhibits = rows[0]['rotating_exhibits'];
		var extensive_collection = rows[0]['extensive_collection'];
		var three_floors = rows[0]['three_floors'];
		var we_spent_hours = rows[0]['we_spent_hours'];
		var displays = rows[0]['displays'];
		var changing_exhibits = rows[0]['changing_exhibits'];
		var second_floor = rows[0]['second_floor'];
		var collection = rows[0]['collection'];
		var old_masters = rows[0]['old_masters'];
		var great_place_to_learn = rows[0]['great_place_to_learn'];
		var learn_something = rows[0]['learn_something'];
		var special_exhibitions = rows[0]['special_exhibitions'];
		var suggested_donation = rows[0]['suggested_donation'];
		var old_west = rows[0]['old_west'];
		var chronological_order = rows[0]['chronological_order'];
		var enjoyed_our_visit = rows[0]['enjoyed_our_visit'];
		var take_pictures = rows[0]['take_pictures'];
		var third_floor = rows[0]['third_floor'];
		var the_lower_level = rows[0]['the_lower_level'];
		var life_size = rows[0]['life_size'];
		var families_count = rows[0]['families_count'];
		var couples_count = rows[0]['couples_count'];
		var solo_count = rows[0]['solo_count'];
		var business_count = rows[0]['business_count'];
		var friends_count = rows[0]['friends_count'];
		var preciserating = rows[0]['preciserating'];
		var quote_pol_var = rows[0]['quote_pol_var'];
		var quote_pol_mean = rows[0]['quote_pol_mean'];
		var quote_pol_max = rows[0]['quote_pol_max'];
		var quote_pol_min = rows[0]['quote_pol_min'];
		var quote_sub_var = rows[0]['quote_sub_var'];
		var quote_sub_mean = rows[0]['quote_sub_mean'];
		var quote_sub_max = rows[0]['quote_sub_max'];
		var quote_sub_min = rows[0]['quote_sub_min'];
		var review_pol_var = rows[0]['review_pol_var'];
		var review_pol_mean = rows[0]['review_pol_mean'];
		var review_pol_max = rows[0]['review_pol_max'];
		var review_pol_min = rows[0]['review_pol_min'];
		var review_sub_var = rows[0]['review_sub_var'];
		var review_sub_mean = rows[0]['review_sub_mean'];
		var review_sub_max = rows[0]['review_sub_max'];
		var review_sub_min = rows[0]['review_sub_min'];
		var descri_pol = rows[0]['descri_pol'];
		var descri_sub = rows[0]['descri_sub'];
		var reviews = rows[0]['reviews'].split('|');
      var referer = req.headers.referer;


      // console.log(rows)
      res.render('museum', {
        referer: referer, id: id,address: address,description: description,featurecount: featurecount,fee: fee,langtitude: langtitude,latitude: latitude,lengthofvisit: lengthofvisit,museumname: museumname,phonenum: phonenum,rank: rank,rating: rating,reviewcount: reviewcount,totalthingstodo: totalthingstodo,country: country,state: state,rankpercentage: rankpercentage,ancient_ruins: ancient_ruins,architectural_buildings: architectural_buildings,arenas_stadiums: arenas_stadiums,art_galleries: art_galleries,art_museums: art_museums,auto_race_tracks: auto_race_tracks,ballets: ballets,battlefields: battlefields,biking_trails: biking_trails,bodies_of_water: bodies_of_water,bridges: bridges,castles: castles,cemeteries: cemeteries,childrens_museums: childrens_museums,city_tours: city_tours,classes_workshops: classes_workshops,coffeehouses: coffeehouses,concerts_shows: concerts_shows,cultural_tours: cultural_tours,educational_sites: educational_sites,factory_tours: factory_tours,flea_street_markets: flea_street_markets,food_drink: food_drink,fun_games: fun_games,gardens: gardens,geologic_formations: geologic_formations,gift_specialty_shops: gift_specialty_shops,government_buildings: government_buildings,historic_sites: historic_sites,historic_walking_areas: historic_walking_areas,historical_heritage_tours: historical_heritage_tours,history_museums: history_museums,islands: islands,lessons_workshops: lessons_workshops,libraries: libraries,lighthouses: lighthouses,literary_art_music_tours: literary_art_music_tours,lookouts: lookouts,military_bases_facilities: military_bases_facilities,military_museums: military_museums,mines: mines,monuments_statues: monuments_statues,movie_theaters: movie_theaters,museums: museums,national_parks: national_parks,natural_history_museums: natural_history_museums,nature_parks: nature_parks,nature_wildlife_areas: nature_wildlife_areas,neighborhoods: neighborhoods,night_tours: night_tours,nightlife: nightlife,observation_decks_towers: observation_decks_towers,observatories_planetariums: observatories_planetariums,other_fun_games: other_fun_games,other_outdoor_activities: other_outdoor_activities,outdoor_activities: outdoor_activities,piers_boardwalks: piers_boardwalks,playgrounds: playgrounds,points_of_interest_landmarks: points_of_interest_landmarks,private_tours: private_tours,sacred_religious_sites: sacred_religious_sites,scenic_railroads: scenic_railroads,scenic_walking_areas: scenic_walking_areas,science_museums: science_museums,selfguided_tours_rentals: selfguided_tours_rentals,ships: ships,shopping: shopping,sights_landmarks: sights_landmarks,specialty_museums: specialty_museums,sports_complexes: sports_complexes,state_parks: state_parks,theaters: theaters,tours: tours,tramways: tramways,transportation: transportation,traveler_resources: traveler_resources,valleys: valleys,visitor_centers: visitor_centers,volcanos: volcanos,walking_tours: walking_tours,wineries_vineyards: wineries_vineyards,zipline_aerial_adventure_parks: zipline_aerial_adventure_parks,zoos_aquariums: zoos_aquariums,on_display: on_display,gift_shop: gift_shop,rainy_day: rainy_day,couple_of_hours: couple_of_hours,all_ages: all_ages,special_exhibits: special_exhibits,few_hours: few_hours,two_hours: two_hours,exhibits: exhibits,well_worth_a_visit: well_worth_a_visit,permanent_collection: permanent_collection,worth_a_visit: worth_a_visit,free_admission: free_admission,audio_guide: audio_guide,beautiful_building: beautiful_building,great_collection: great_collection,information: information,interesting_exhibits: interesting_exhibits,entrance_fee: entrance_fee,great_for_kids: great_for_kids,interactive_exhibits: interactive_exhibits,hands_on_activities: hands_on_activities,great_exhibits: great_exhibits,great_place_to_visit: great_place_to_visit,interactive_displays: interactive_displays,guided_tour: guided_tour,well_worth_the_visit: well_worth_the_visit,whole_family: whole_family,kids_and_adults: kids_and_adults,traveling_exhibits: traveling_exhibits,his_life: his_life,local_history: local_history,amazing_collection: amazing_collection,free_entry: free_entry,worth_the_trip: worth_the_trip,great_history: great_history,civil_war: civil_war,take_your_time: take_your_time,nice_collection: nice_collection,interesting_place: interesting_place,great_museum: great_museum,for_sale: for_sale,art_lovers: art_lovers,artifacts: artifacts,van_gogh: van_gogh,audio_tour: audio_tour,history: history,galleries: galleries,works_of_art: works_of_art,natural_history: natural_history,self_guided_tour: self_guided_tour,private_collection: private_collection,own_pace: own_pace,sculpture_garden: sculpture_garden,moving_experience: moving_experience,three_hours: three_hours,lots_of_history: lots_of_history,modern_art: modern_art,history_buff: history_buff,admission: admission,small_museum: small_museum,step_back_in_time: step_back_in_time,worth_a_stop: worth_a_stop,short_film: short_film,stuffed_animals: stuffed_animals,walk_around: walk_around,entry_fee: entry_fee,great_displays: great_displays,world_war: world_war,scavenger_hunt: scavenger_hunt,across_the_street: across_the_street,museums2: museums2,top_floor: top_floor,a_lot_of_fun: a_lot_of_fun,history_lesson: history_lesson,large_collection: large_collection,eye_opening: eye_opening,american_history: american_history,interesting_artifacts: interesting_artifacts,early_days: early_days,rotating_exhibits: rotating_exhibits,extensive_collection: extensive_collection,three_floors: three_floors,we_spent_hours: we_spent_hours,displays: displays,changing_exhibits: changing_exhibits,second_floor: second_floor,collection: collection,old_masters: old_masters,great_place_to_learn: great_place_to_learn,learn_something: learn_something,special_exhibitions: special_exhibitions,suggested_donation: suggested_donation,old_west: old_west,chronological_order: chronological_order,enjoyed_our_visit: enjoyed_our_visit,take_pictures: take_pictures,third_floor: third_floor,the_lower_level: the_lower_level,life_size: life_size,families_count: families_count,couples_count: couples_count,solo_count: solo_count,business_count: business_count,friends_count: friends_count,preciserating: preciserating,quote_pol_var: quote_pol_var,quote_pol_mean: quote_pol_mean,quote_pol_max: quote_pol_max,quote_pol_min: quote_pol_min,quote_sub_var: quote_sub_var,quote_sub_mean: quote_sub_mean,quote_sub_max: quote_sub_max,quote_sub_min: quote_sub_min,review_pol_var: review_pol_var,review_pol_mean: review_pol_mean,review_pol_max: review_pol_max,review_pol_min: review_pol_min,review_sub_var: review_sub_var,review_sub_mean: review_sub_mean,review_sub_max: review_sub_max,review_sub_min: review_sub_min,descri_pol: descri_pol,descri_sub: descri_sub,reviews: reviews
      });

      
    }
  });
});

app.get('/search', function(req, res) {  
  if (!req.query.searchin){
    req.query.searchin = 'title';
    req.query.searchval = 'DO A BLANK SEARCH';
  }
  if (req.query.searchin == 'all'){
    var sql = 'SELECT * from museums where museumname like ?';
  }
  if (req.query.searchin == 'title'){
    var sql = 'SELECT * from museums where museumname like ?';
  }
 
  
  if (req.query.orderby == 'title'){
    sql = sql + ' order by museumname asc';
  }

  

  
  sql = sql + ' LIMIT 100';

  
  
  db.all(sql, '%'+req.query.searchval+'%', function(err, rows) {

    if (err){console.log(err);}
    var results = [];      
    rows.forEach((r)=>{
      r.reviews = r.reviews.split('|');
      results.push(r);
    });
    if (req.query.format && req.query.format == 'json'){
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(results));
      
      
    }else{
      res.render('search', {results:results});  
    }
    
  });
  
  
});


app.get('/random', function(req, res) {
  // first ask the DB for a random museum ID
  db.all('SELECT id FROM museums ORDER BY RANDOM() LIMIT 1;', function(err, rows) {
    // store it in its own variable
    var id = rows[0]['id'];
    //now redirect the requset to the new museum page, build the URL
    res.redirect('/museum/' + id);
  })      
})


// http://expressjs.com/en/starter/basic-routing.html
app.get('/map', function(req, res) {


  res.render('map', {});
  
})

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {

    db.all('SELECT * FROM museums ORDER BY RANDOM() LIMIT 10;', function(err, rows) {
var id1 = rows[0]['id'];
var address1 = rows[0]['address'];
var description1 = rows[0]['description'];
var featurecount1 = rows[0]['featurecount'];
var fee1 = rows[0]['fee'];
var langtitude1 = rows[0]['langtitude'];
var latitude1 = rows[0]['latitude'];
var lengthofvisit1 = rows[0]['lengthofvisit'];
var museumname1 = rows[0]['museumname'];
var phonenum1 = rows[0]['phonenum'];
var rank1 = rows[0]['rank'];
var rating1 = rows[0]['rating'];
var reviewcount1 = rows[0]['reviewcount'];
var totalthingstodo1 = rows[0]['totalthingstodo'];
var country1 = rows[0]['country'];
var state1 = rows[0]['state'];
var rankpercentage1 = rows[0]['rankpercentage'];
var ancient_ruins1 = rows[0]['ancient_ruins'];
var architectural_buildings1 = rows[0]['architectural_buildings'];
var arenas_stadiums1 = rows[0]['arenas_stadiums'];
var art_galleries1 = rows[0]['art_galleries'];
var art_museums1 = rows[0]['art_museums'];
var auto_race_tracks1 = rows[0]['auto_race_tracks'];
var ballets1 = rows[0]['ballets'];
var battlefields1 = rows[0]['battlefields'];
var biking_trails1 = rows[0]['biking_trails'];
var bodies_of_water1 = rows[0]['bodies_of_water'];
var bridges1 = rows[0]['bridges'];
var castles1 = rows[0]['castles'];
var cemeteries1 = rows[0]['cemeteries'];
var childrens_museums1 = rows[0]['childrens_museums'];
var city_tours1 = rows[0]['city_tours'];
var classes_workshops1 = rows[0]['classes_workshops'];
var coffeehouses1 = rows[0]['coffeehouses'];
var concerts_shows1 = rows[0]['concerts_shows'];
var cultural_tours1 = rows[0]['cultural_tours'];
var educational_sites1 = rows[0]['educational_sites'];
var factory_tours1 = rows[0]['factory_tours'];
var flea_street_markets1 = rows[0]['flea_street_markets'];
var food_drink1 = rows[0]['food_drink'];
var fun_games1 = rows[0]['fun_games'];
var gardens1 = rows[0]['gardens'];
var geologic_formations1 = rows[0]['geologic_formations'];
var gift_specialty_shops1 = rows[0]['gift_specialty_shops'];
var government_buildings1 = rows[0]['government_buildings'];
var historic_sites1 = rows[0]['historic_sites'];
var historic_walking_areas1 = rows[0]['historic_walking_areas'];
var historical_heritage_tours1 = rows[0]['historical_heritage_tours'];
var history_museums1 = rows[0]['history_museums'];
var islands1 = rows[0]['islands'];
var lessons_workshops1 = rows[0]['lessons_workshops'];
var libraries1 = rows[0]['libraries'];
var lighthouses1 = rows[0]['lighthouses'];
var literary_art_music_tours1 = rows[0]['literary_art_music_tours'];
var lookouts1 = rows[0]['lookouts'];
var military_bases_facilities1 = rows[0]['military_bases_facilities'];
var military_museums1 = rows[0]['military_museums'];
var mines1 = rows[0]['mines'];
var monuments_statues1 = rows[0]['monuments_statues'];
var movie_theaters1 = rows[0]['movie_theaters'];
var museums1 = rows[0]['museums'];
var national_parks1 = rows[0]['national_parks'];
var natural_history_museums1 = rows[0]['natural_history_museums'];
var nature_parks1 = rows[0]['nature_parks'];
var nature_wildlife_areas1 = rows[0]['nature_wildlife_areas'];
var neighborhoods1 = rows[0]['neighborhoods'];
var night_tours1 = rows[0]['night_tours'];
var nightlife1 = rows[0]['nightlife'];
var observation_decks_towers1 = rows[0]['observation_decks_towers'];
var observatories_planetariums1 = rows[0]['observatories_planetariums'];
var other_fun_games1 = rows[0]['other_fun_games'];
var other_outdoor_activities1 = rows[0]['other_outdoor_activities'];
var outdoor_activities1 = rows[0]['outdoor_activities'];
var piers_boardwalks1 = rows[0]['piers_boardwalks'];
var playgrounds1 = rows[0]['playgrounds'];
var points_of_interest_landmarks1 = rows[0]['points_of_interest_landmarks'];
var private_tours1 = rows[0]['private_tours'];
var sacred_religious_sites1 = rows[0]['sacred_religious_sites'];
var scenic_railroads1 = rows[0]['scenic_railroads'];
var scenic_walking_areas1 = rows[0]['scenic_walking_areas'];
var science_museums1 = rows[0]['science_museums'];
var selfguided_tours_rentals1 = rows[0]['selfguided_tours_rentals'];
var ships1 = rows[0]['ships'];
var shopping1 = rows[0]['shopping'];
var sights_landmarks1 = rows[0]['sights_landmarks'];
var specialty_museums1 = rows[0]['specialty_museums'];
var sports_complexes1 = rows[0]['sports_complexes'];
var state_parks1 = rows[0]['state_parks'];
var theaters1 = rows[0]['theaters'];
var tours1 = rows[0]['tours'];
var tramways1 = rows[0]['tramways'];
var transportation1 = rows[0]['transportation'];
var traveler_resources1 = rows[0]['traveler_resources'];
var valleys1 = rows[0]['valleys'];
var visitor_centers1 = rows[0]['visitor_centers'];
var volcanos1 = rows[0]['volcanos'];
var walking_tours1 = rows[0]['walking_tours'];
var wineries_vineyards1 = rows[0]['wineries_vineyards'];
var zipline_aerial_adventure_parks1 = rows[0]['zipline_aerial_adventure_parks'];
var zoos_aquariums1 = rows[0]['zoos_aquariums'];
var on_display1 = rows[0]['on_display'];
var gift_shop1 = rows[0]['gift_shop'];
var rainy_day1 = rows[0]['rainy_day'];
var couple_of_hours1 = rows[0]['couple_of_hours'];
var all_ages1 = rows[0]['all_ages'];
var special_exhibits1 = rows[0]['special_exhibits'];
var few_hours1 = rows[0]['few_hours'];
var two_hours1 = rows[0]['two_hours'];
var exhibits1 = rows[0]['exhibits'];
var well_worth_a_visit1 = rows[0]['well_worth_a_visit'];
var permanent_collection1 = rows[0]['permanent_collection'];
var worth_a_visit1 = rows[0]['worth_a_visit'];
var free_admission1 = rows[0]['free_admission'];
var audio_guide1 = rows[0]['audio_guide'];
var beautiful_building1 = rows[0]['beautiful_building'];
var great_collection1 = rows[0]['great_collection'];
var information1 = rows[0]['information'];
var interesting_exhibits1 = rows[0]['interesting_exhibits'];
var entrance_fee1 = rows[0]['entrance_fee'];
var great_for_kids1 = rows[0]['great_for_kids'];
var interactive_exhibits1 = rows[0]['interactive_exhibits'];
var hands_on_activities1 = rows[0]['hands_on_activities'];
var great_exhibits1 = rows[0]['great_exhibits'];
var great_place_to_visit1 = rows[0]['great_place_to_visit'];
var interactive_displays1 = rows[0]['interactive_displays'];
var guided_tour1 = rows[0]['guided_tour'];
var well_worth_the_visit1 = rows[0]['well_worth_the_visit'];
var whole_family1 = rows[0]['whole_family'];
var kids_and_adults1 = rows[0]['kids_and_adults'];
var traveling_exhibits1 = rows[0]['traveling_exhibits'];
var his_life1 = rows[0]['his_life'];
var local_history1 = rows[0]['local_history'];
var amazing_collection1 = rows[0]['amazing_collection'];
var free_entry1 = rows[0]['free_entry'];
var worth_the_trip1 = rows[0]['worth_the_trip'];
var great_history1 = rows[0]['great_history'];
var civil_war1 = rows[0]['civil_war'];
var take_your_time1 = rows[0]['take_your_time'];
var nice_collection1 = rows[0]['nice_collection'];
var interesting_place1 = rows[0]['interesting_place'];
var great_museum1 = rows[0]['great_museum'];
var for_sale1 = rows[0]['for_sale'];
var art_lovers1 = rows[0]['art_lovers'];
var artifacts1 = rows[0]['artifacts'];
var van_gogh1 = rows[0]['van_gogh'];
var audio_tour1 = rows[0]['audio_tour'];
var history1 = rows[0]['history'];
var galleries1 = rows[0]['galleries'];
var works_of_art1 = rows[0]['works_of_art'];
var natural_history1 = rows[0]['natural_history'];
var self_guided_tour1 = rows[0]['self_guided_tour'];
var private_collection1 = rows[0]['private_collection'];
var own_pace1 = rows[0]['own_pace'];
var sculpture_garden1 = rows[0]['sculpture_garden'];
var moving_experience1 = rows[0]['moving_experience'];
var three_hours1 = rows[0]['three_hours'];
var lots_of_history1 = rows[0]['lots_of_history'];
var modern_art1 = rows[0]['modern_art'];
var history_buff1 = rows[0]['history_buff'];
var admission1 = rows[0]['admission'];
var small_museum1 = rows[0]['small_museum'];
var step_back_in_time1 = rows[0]['step_back_in_time'];
var worth_a_stop1 = rows[0]['worth_a_stop'];
var short_film1 = rows[0]['short_film'];
var stuffed_animals1 = rows[0]['stuffed_animals'];
var walk_around1 = rows[0]['walk_around'];
var entry_fee1 = rows[0]['entry_fee'];
var great_displays1 = rows[0]['great_displays'];
var world_war1 = rows[0]['world_war'];
var scavenger_hunt1 = rows[0]['scavenger_hunt'];
var across_the_street1 = rows[0]['across_the_street'];
var museums21 = rows[0]['museums2'];
var top_floor1 = rows[0]['top_floor'];
var a_lot_of_fun1 = rows[0]['a_lot_of_fun'];
var history_lesson1 = rows[0]['history_lesson'];
var large_collection1 = rows[0]['large_collection'];
var eye_opening1 = rows[0]['eye_opening'];
var american_history1 = rows[0]['american_history'];
var interesting_artifacts1 = rows[0]['interesting_artifacts'];
var early_days1 = rows[0]['early_days'];
var rotating_exhibits1 = rows[0]['rotating_exhibits'];
var extensive_collection1 = rows[0]['extensive_collection'];
var three_floors1 = rows[0]['three_floors'];
var we_spent_hours1 = rows[0]['we_spent_hours'];
var displays1 = rows[0]['displays'];
var changing_exhibits1 = rows[0]['changing_exhibits'];
var second_floor1 = rows[0]['second_floor'];
var collection1 = rows[0]['collection'];
var old_masters1 = rows[0]['old_masters'];
var great_place_to_learn1 = rows[0]['great_place_to_learn'];
var learn_something1 = rows[0]['learn_something'];
var special_exhibitions1 = rows[0]['special_exhibitions'];
var suggested_donation1 = rows[0]['suggested_donation'];
var old_west1 = rows[0]['old_west'];
var chronological_order1 = rows[0]['chronological_order'];
var enjoyed_our_visit1 = rows[0]['enjoyed_our_visit'];
var take_pictures1 = rows[0]['take_pictures'];
var third_floor1 = rows[0]['third_floor'];
var the_lower_level1 = rows[0]['the_lower_level'];
var life_size1 = rows[0]['life_size'];
var families_count1 = rows[0]['families_count'];
var couples_count1 = rows[0]['couples_count'];
var solo_count1 = rows[0]['solo_count'];
var business_count1 = rows[0]['business_count'];
var friends_count1 = rows[0]['friends_count'];
var preciserating1 = rows[0]['preciserating'];
var quote_pol_var1 = rows[0]['quote_pol_var'];
var quote_pol_mean1 = rows[0]['quote_pol_mean'];
var quote_pol_max1 = rows[0]['quote_pol_max'];
var quote_pol_min1 = rows[0]['quote_pol_min'];
var quote_sub_var1 = rows[0]['quote_sub_var'];
var quote_sub_mean1 = rows[0]['quote_sub_mean'];
var quote_sub_max1 = rows[0]['quote_sub_max'];
var quote_sub_min1 = rows[0]['quote_sub_min'];
var review_pol_var1 = rows[0]['review_pol_var'];
var review_pol_mean1 = rows[0]['review_pol_mean'];
var review_pol_max1 = rows[0]['review_pol_max'];
var review_pol_min1 = rows[0]['review_pol_min'];
var review_sub_var1 = rows[0]['review_sub_var'];
var review_sub_mean1 = rows[0]['review_sub_mean'];
var review_sub_max1 = rows[0]['review_sub_max'];
var review_sub_min1 = rows[0]['review_sub_min'];
var descri_pol1 = rows[0]['descri_pol'];
var descri_sub1 = rows[0]['descri_sub'];
var reviews1 = rows[0]['reviews'].split('|');

var id2 = rows[1]['id'];
var address2 = rows[1]['address'];
var description2 = rows[1]['description'];
var featurecount2 = rows[1]['featurecount'];
var fee2 = rows[1]['fee'];
var langtitude2 = rows[1]['langtitude'];
var latitude2 = rows[1]['latitude'];
var lengthofvisit2 = rows[1]['lengthofvisit'];
var museumname2 = rows[1]['museumname'];
var phonenum2 = rows[1]['phonenum'];
var rank2 = rows[1]['rank'];
var rating2 = rows[1]['rating'];
var reviewcount2 = rows[1]['reviewcount'];
var totalthingstodo2 = rows[1]['totalthingstodo'];
var country2 = rows[1]['country'];
var state2 = rows[1]['state'];
var rankpercentage2 = rows[1]['rankpercentage'];
var ancient_ruins2 = rows[1]['ancient_ruins'];
var architectural_buildings2 = rows[1]['architectural_buildings'];
var arenas_stadiums2 = rows[1]['arenas_stadiums'];
var art_galleries2 = rows[1]['art_galleries'];
var art_museums2 = rows[1]['art_museums'];
var auto_race_tracks2 = rows[1]['auto_race_tracks'];
var ballets2 = rows[1]['ballets'];
var battlefields2 = rows[1]['battlefields'];
var biking_trails2 = rows[1]['biking_trails'];
var bodies_of_water2 = rows[1]['bodies_of_water'];
var bridges2 = rows[1]['bridges'];
var castles2 = rows[1]['castles'];
var cemeteries2 = rows[1]['cemeteries'];
var childrens_museums2 = rows[1]['childrens_museums'];
var city_tours2 = rows[1]['city_tours'];
var classes_workshops2 = rows[1]['classes_workshops'];
var coffeehouses2 = rows[1]['coffeehouses'];
var concerts_shows2 = rows[1]['concerts_shows'];
var cultural_tours2 = rows[1]['cultural_tours'];
var educational_sites2 = rows[1]['educational_sites'];
var factory_tours2 = rows[1]['factory_tours'];
var flea_street_markets2 = rows[1]['flea_street_markets'];
var food_drink2 = rows[1]['food_drink'];
var fun_games2 = rows[1]['fun_games'];
var gardens2 = rows[1]['gardens'];
var geologic_formations2 = rows[1]['geologic_formations'];
var gift_specialty_shops2 = rows[1]['gift_specialty_shops'];
var government_buildings2 = rows[1]['government_buildings'];
var historic_sites2 = rows[1]['historic_sites'];
var historic_walking_areas2 = rows[1]['historic_walking_areas'];
var historical_heritage_tours2 = rows[1]['historical_heritage_tours'];
var history_museums2 = rows[1]['history_museums'];
var islands2 = rows[1]['islands'];
var lessons_workshops2 = rows[1]['lessons_workshops'];
var libraries2 = rows[1]['libraries'];
var lighthouses2 = rows[1]['lighthouses'];
var literary_art_music_tours2 = rows[1]['literary_art_music_tours'];
var lookouts2 = rows[1]['lookouts'];
var military_bases_facilities2 = rows[1]['military_bases_facilities'];
var military_museums2 = rows[1]['military_museums'];
var mines2 = rows[1]['mines'];
var monuments_statues2 = rows[1]['monuments_statues'];
var movie_theaters2 = rows[1]['movie_theaters'];
var museums2 = rows[1]['museums'];
var national_parks2 = rows[1]['national_parks'];
var natural_history_museums2 = rows[1]['natural_history_museums'];
var nature_parks2 = rows[1]['nature_parks'];
var nature_wildlife_areas2 = rows[1]['nature_wildlife_areas'];
var neighborhoods2 = rows[1]['neighborhoods'];
var night_tours2 = rows[1]['night_tours'];
var nightlife2 = rows[1]['nightlife'];
var observation_decks_towers2 = rows[1]['observation_decks_towers'];
var observatories_planetariums2 = rows[1]['observatories_planetariums'];
var other_fun_games2 = rows[1]['other_fun_games'];
var other_outdoor_activities2 = rows[1]['other_outdoor_activities'];
var outdoor_activities2 = rows[1]['outdoor_activities'];
var piers_boardwalks2 = rows[1]['piers_boardwalks'];
var playgrounds2 = rows[1]['playgrounds'];
var points_of_interest_landmarks2 = rows[1]['points_of_interest_landmarks'];
var private_tours2 = rows[1]['private_tours'];
var sacred_religious_sites2 = rows[1]['sacred_religious_sites'];
var scenic_railroads2 = rows[1]['scenic_railroads'];
var scenic_walking_areas2 = rows[1]['scenic_walking_areas'];
var science_museums2 = rows[1]['science_museums'];
var selfguided_tours_rentals2 = rows[1]['selfguided_tours_rentals'];
var ships2 = rows[1]['ships'];
var shopping2 = rows[1]['shopping'];
var sights_landmarks2 = rows[1]['sights_landmarks'];
var specialty_museums2 = rows[1]['specialty_museums'];
var sports_complexes2 = rows[1]['sports_complexes'];
var state_parks2 = rows[1]['state_parks'];
var theaters2 = rows[1]['theaters'];
var tours2 = rows[1]['tours'];
var tramways2 = rows[1]['tramways'];
var transportation2 = rows[1]['transportation'];
var traveler_resources2 = rows[1]['traveler_resources'];
var valleys2 = rows[1]['valleys'];
var visitor_centers2 = rows[1]['visitor_centers'];
var volcanos2 = rows[1]['volcanos'];
var walking_tours2 = rows[1]['walking_tours'];
var wineries_vineyards2 = rows[1]['wineries_vineyards'];
var zipline_aerial_adventure_parks2 = rows[1]['zipline_aerial_adventure_parks'];
var zoos_aquariums2 = rows[1]['zoos_aquariums'];
var on_display2 = rows[1]['on_display'];
var gift_shop2 = rows[1]['gift_shop'];
var rainy_day2 = rows[1]['rainy_day'];
var couple_of_hours2 = rows[1]['couple_of_hours'];
var all_ages2 = rows[1]['all_ages'];
var special_exhibits2 = rows[1]['special_exhibits'];
var few_hours2 = rows[1]['few_hours'];
var two_hours2 = rows[1]['two_hours'];
var exhibits2 = rows[1]['exhibits'];
var well_worth_a_visit2 = rows[1]['well_worth_a_visit'];
var permanent_collection2 = rows[1]['permanent_collection'];
var worth_a_visit2 = rows[1]['worth_a_visit'];
var free_admission2 = rows[1]['free_admission'];
var audio_guide2 = rows[1]['audio_guide'];
var beautiful_building2 = rows[1]['beautiful_building'];
var great_collection2 = rows[1]['great_collection'];
var information2 = rows[1]['information'];
var interesting_exhibits2 = rows[1]['interesting_exhibits'];
var entrance_fee2 = rows[1]['entrance_fee'];
var great_for_kids2 = rows[1]['great_for_kids'];
var interactive_exhibits2 = rows[1]['interactive_exhibits'];
var hands_on_activities2 = rows[1]['hands_on_activities'];
var great_exhibits2 = rows[1]['great_exhibits'];
var great_place_to_visit2 = rows[1]['great_place_to_visit'];
var interactive_displays2 = rows[1]['interactive_displays'];
var guided_tour2 = rows[1]['guided_tour'];
var well_worth_the_visit2 = rows[1]['well_worth_the_visit'];
var whole_family2 = rows[1]['whole_family'];
var kids_and_adults2 = rows[1]['kids_and_adults'];
var traveling_exhibits2 = rows[1]['traveling_exhibits'];
var his_life2 = rows[1]['his_life'];
var local_history2 = rows[1]['local_history'];
var amazing_collection2 = rows[1]['amazing_collection'];
var free_entry2 = rows[1]['free_entry'];
var worth_the_trip2 = rows[1]['worth_the_trip'];
var great_history2 = rows[1]['great_history'];
var civil_war2 = rows[1]['civil_war'];
var take_your_time2 = rows[1]['take_your_time'];
var nice_collection2 = rows[1]['nice_collection'];
var interesting_place2 = rows[1]['interesting_place'];
var great_museum2 = rows[1]['great_museum'];
var for_sale2 = rows[1]['for_sale'];
var art_lovers2 = rows[1]['art_lovers'];
var artifacts2 = rows[1]['artifacts'];
var van_gogh2 = rows[1]['van_gogh'];
var audio_tour2 = rows[1]['audio_tour'];
var history2 = rows[1]['history'];
var galleries2 = rows[1]['galleries'];
var works_of_art2 = rows[1]['works_of_art'];
var natural_history2 = rows[1]['natural_history'];
var self_guided_tour2 = rows[1]['self_guided_tour'];
var private_collection2 = rows[1]['private_collection'];
var own_pace2 = rows[1]['own_pace'];
var sculpture_garden2 = rows[1]['sculpture_garden'];
var moving_experience2 = rows[1]['moving_experience'];
var three_hours2 = rows[1]['three_hours'];
var lots_of_history2 = rows[1]['lots_of_history'];
var modern_art2 = rows[1]['modern_art'];
var history_buff2 = rows[1]['history_buff'];
var admission2 = rows[1]['admission'];
var small_museum2 = rows[1]['small_museum'];
var step_back_in_time2 = rows[1]['step_back_in_time'];
var worth_a_stop2 = rows[1]['worth_a_stop'];
var short_film2 = rows[1]['short_film'];
var stuffed_animals2 = rows[1]['stuffed_animals'];
var walk_around2 = rows[1]['walk_around'];
var entry_fee2 = rows[1]['entry_fee'];
var great_displays2 = rows[1]['great_displays'];
var world_war2 = rows[1]['world_war'];
var scavenger_hunt2 = rows[1]['scavenger_hunt'];
var across_the_street2 = rows[1]['across_the_street'];
var museums22 = rows[1]['museums2'];
var top_floor2 = rows[1]['top_floor'];
var a_lot_of_fun2 = rows[1]['a_lot_of_fun'];
var history_lesson2 = rows[1]['history_lesson'];
var large_collection2 = rows[1]['large_collection'];
var eye_opening2 = rows[1]['eye_opening'];
var american_history2 = rows[1]['american_history'];
var interesting_artifacts2 = rows[1]['interesting_artifacts'];
var early_days2 = rows[1]['early_days'];
var rotating_exhibits2 = rows[1]['rotating_exhibits'];
var extensive_collection2 = rows[1]['extensive_collection'];
var three_floors2 = rows[1]['three_floors'];
var we_spent_hours2 = rows[1]['we_spent_hours'];
var displays2 = rows[1]['displays'];
var changing_exhibits2 = rows[1]['changing_exhibits'];
var second_floor2 = rows[1]['second_floor'];
var collection2 = rows[1]['collection'];
var old_masters2 = rows[1]['old_masters'];
var great_place_to_learn2 = rows[1]['great_place_to_learn'];
var learn_something2 = rows[1]['learn_something'];
var special_exhibitions2 = rows[1]['special_exhibitions'];
var suggested_donation2 = rows[1]['suggested_donation'];
var old_west2 = rows[1]['old_west'];
var chronological_order2 = rows[1]['chronological_order'];
var enjoyed_our_visit2 = rows[1]['enjoyed_our_visit'];
var take_pictures2 = rows[1]['take_pictures'];
var third_floor2 = rows[1]['third_floor'];
var the_lower_level2 = rows[1]['the_lower_level'];
var life_size2 = rows[1]['life_size'];
var families_count2 = rows[1]['families_count'];
var couples_count2 = rows[1]['couples_count'];
var solo_count2 = rows[1]['solo_count'];
var business_count2 = rows[1]['business_count'];
var friends_count2 = rows[1]['friends_count'];
var preciserating2 = rows[1]['preciserating'];
var quote_pol_var2 = rows[1]['quote_pol_var'];
var quote_pol_mean2 = rows[1]['quote_pol_mean'];
var quote_pol_max2 = rows[1]['quote_pol_max'];
var quote_pol_min2 = rows[1]['quote_pol_min'];
var quote_sub_var2 = rows[1]['quote_sub_var'];
var quote_sub_mean2 = rows[1]['quote_sub_mean'];
var quote_sub_max2 = rows[1]['quote_sub_max'];
var quote_sub_min2 = rows[1]['quote_sub_min'];
var review_pol_var2 = rows[1]['review_pol_var'];
var review_pol_mean2 = rows[1]['review_pol_mean'];
var review_pol_max2 = rows[1]['review_pol_max'];
var review_pol_min2 = rows[1]['review_pol_min'];
var review_sub_var2 = rows[1]['review_sub_var'];
var review_sub_mean2 = rows[1]['review_sub_mean'];
var review_sub_max2 = rows[1]['review_sub_max'];
var review_sub_min2 = rows[1]['review_sub_min'];
var descri_pol2 = rows[1]['descri_pol'];
var descri_sub2 = rows[1]['descri_sub'];
var reviews2 = rows[1]['reviews'].split('|');
            
      
      // console.log(rows)
      res.render('index', {
        id1: id1,address1: address1,description1: description1,featurecount1: featurecount1,fee1: fee1,langtitude1: langtitude1,latitude1: latitude1,lengthofvisit1: lengthofvisit1,museumname1: museumname1,phonenum1: phonenum1,rank1: rank1,rating1: rating1,reviewcount1: reviewcount1,totalthingstodo1: totalthingstodo1,country1: country1,state1: state1,rankpercentage1: rankpercentage1,ancient_ruins1: ancient_ruins1,architectural_buildings1: architectural_buildings1,arenas_stadiums1: arenas_stadiums1,art_galleries1: art_galleries1,art_museums1: art_museums1,auto_race_tracks1: auto_race_tracks1,ballets1: ballets1,battlefields1: battlefields1,biking_trails1: biking_trails1,bodies_of_water1: bodies_of_water1,bridges1: bridges1,castles1: castles1,cemeteries1: cemeteries1,childrens_museums1: childrens_museums1,city_tours1: city_tours1,classes_workshops1: classes_workshops1,coffeehouses1: coffeehouses1,concerts_shows1: concerts_shows1,cultural_tours1: cultural_tours1,educational_sites1: educational_sites1,factory_tours1: factory_tours1,flea_street_markets1: flea_street_markets1,food_drink1: food_drink1,fun_games1: fun_games1,gardens1: gardens1,geologic_formations1: geologic_formations1,gift_specialty_shops1: gift_specialty_shops1,government_buildings1: government_buildings1,historic_sites1: historic_sites1,historic_walking_areas1: historic_walking_areas1,historical_heritage_tours1: historical_heritage_tours1,history_museums1: history_museums1,islands1: islands1,lessons_workshops1: lessons_workshops1,libraries1: libraries1,lighthouses1: lighthouses1,literary_art_music_tours1: literary_art_music_tours1,lookouts1: lookouts1,military_bases_facilities1: military_bases_facilities1,military_museums1: military_museums1,mines1: mines1,monuments_statues1: monuments_statues1,movie_theaters1: movie_theaters1,museums1: museums1,national_parks1: national_parks1,natural_history_museums1: natural_history_museums1,nature_parks1: nature_parks1,nature_wildlife_areas1: nature_wildlife_areas1,neighborhoods1: neighborhoods1,night_tours1: night_tours1,nightlife1: nightlife1,observation_decks_towers1: observation_decks_towers1,observatories_planetariums1: observatories_planetariums1,other_fun_games1: other_fun_games1,other_outdoor_activities1: other_outdoor_activities1,outdoor_activities1: outdoor_activities1,piers_boardwalks1: piers_boardwalks1,playgrounds1: playgrounds1,points_of_interest_landmarks1: points_of_interest_landmarks1,private_tours1: private_tours1,sacred_religious_sites1: sacred_religious_sites1,scenic_railroads1: scenic_railroads1,scenic_walking_areas1: scenic_walking_areas1,science_museums1: science_museums1,selfguided_tours_rentals1: selfguided_tours_rentals1,ships1: ships1,shopping1: shopping1,sights_landmarks1: sights_landmarks1,specialty_museums1: specialty_museums1,sports_complexes1: sports_complexes1,state_parks1: state_parks1,theaters1: theaters1,tours1: tours1,tramways1: tramways1,transportation1: transportation1,traveler_resources1: traveler_resources1,valleys1: valleys1,visitor_centers1: visitor_centers1,volcanos1: volcanos1,walking_tours1: walking_tours1,wineries_vineyards1: wineries_vineyards1,zipline_aerial_adventure_parks1: zipline_aerial_adventure_parks1,zoos_aquariums1: zoos_aquariums1,on_display1: on_display1,gift_shop1: gift_shop1,rainy_day1: rainy_day1,couple_of_hours1: couple_of_hours1,all_ages1: all_ages1,special_exhibits1: special_exhibits1,few_hours1: few_hours1,two_hours1: two_hours1,exhibits1: exhibits1,well_worth_a_visit1: well_worth_a_visit1,permanent_collection1: permanent_collection1,worth_a_visit1: worth_a_visit1,free_admission1: free_admission1,audio_guide1: audio_guide1,beautiful_building1: beautiful_building1,great_collection1: great_collection1,information1: information1,interesting_exhibits1: interesting_exhibits1,entrance_fee1: entrance_fee1,great_for_kids1: great_for_kids1,interactive_exhibits1: interactive_exhibits1,hands_on_activities1: hands_on_activities1,great_exhibits1: great_exhibits1,great_place_to_visit1: great_place_to_visit1,interactive_displays1: interactive_displays1,guided_tour1: guided_tour1,well_worth_the_visit1: well_worth_the_visit1,whole_family1: whole_family1,kids_and_adults1: kids_and_adults1,traveling_exhibits1: traveling_exhibits1,his_life1: his_life1,local_history1: local_history1,amazing_collection1: amazing_collection1,free_entry1: free_entry1,worth_the_trip1: worth_the_trip1,great_history1: great_history1,civil_war1: civil_war1,take_your_time1: take_your_time1,nice_collection1: nice_collection1,interesting_place1: interesting_place1,great_museum1: great_museum1,for_sale1: for_sale1,art_lovers1: art_lovers1,artifacts1: artifacts1,van_gogh1: van_gogh1,audio_tour1: audio_tour1,history1: history1,galleries1: galleries1,works_of_art1: works_of_art1,natural_history1: natural_history1,self_guided_tour1: self_guided_tour1,private_collection1: private_collection1,own_pace1: own_pace1,sculpture_garden1: sculpture_garden1,moving_experience1: moving_experience1,three_hours1: three_hours1,lots_of_history1: lots_of_history1,modern_art1: modern_art1,history_buff1: history_buff1,admission1: admission1,small_museum1: small_museum1,step_back_in_time1: step_back_in_time1,worth_a_stop1: worth_a_stop1,short_film1: short_film1,stuffed_animals1: stuffed_animals1,walk_around1: walk_around1,entry_fee1: entry_fee1,great_displays1: great_displays1,world_war1: world_war1,scavenger_hunt1: scavenger_hunt1,across_the_street1: across_the_street1,museums21: museums21,top_floor1: top_floor1,a_lot_of_fun1: a_lot_of_fun1,history_lesson1: history_lesson1,large_collection1: large_collection1,eye_opening1: eye_opening1,american_history1: american_history1,interesting_artifacts1: interesting_artifacts1,early_days1: early_days1,rotating_exhibits1: rotating_exhibits1,extensive_collection1: extensive_collection1,three_floors1: three_floors1,we_spent_hours1: we_spent_hours1,displays1: displays1,changing_exhibits1: changing_exhibits1,second_floor1: second_floor1,collection1: collection1,old_masters1: old_masters1,great_place_to_learn1: great_place_to_learn1,learn_something1: learn_something1,special_exhibitions1: special_exhibitions1,suggested_donation1: suggested_donation1,old_west1: old_west1,chronological_order1: chronological_order1,enjoyed_our_visit1: enjoyed_our_visit1,take_pictures1: take_pictures1,third_floor1: third_floor1,the_lower_level1: the_lower_level1,life_size1: life_size1,families_count1: families_count1,couples_count1: couples_count1,solo_count1: solo_count1,business_count1: business_count1,friends_count1: friends_count1,preciserating1: preciserating1,quote_pol_var1: quote_pol_var1,quote_pol_mean1: quote_pol_mean1,quote_pol_max1: quote_pol_max1,quote_pol_min1: quote_pol_min1,quote_sub_var1: quote_sub_var1,quote_sub_mean1: quote_sub_mean1,quote_sub_max1: quote_sub_max1,quote_sub_min1: quote_sub_min1,review_pol_var1: review_pol_var1,review_pol_mean1: review_pol_mean1,review_pol_max1: review_pol_max1,review_pol_min1: review_pol_min1,review_sub_var1: review_sub_var1,review_sub_mean1: review_sub_mean1,review_sub_max1: review_sub_max1,review_sub_min1: review_sub_min1,descri_pol1: descri_pol1,descri_sub1: descri_sub1,reviews1: reviews1,
        id2: id2,address2: address2,description2: description2,featurecount2: featurecount2,fee2: fee2,langtitude2: langtitude2,latitude2: latitude2,lengthofvisit2: lengthofvisit2,museumname2: museumname2,phonenum2: phonenum2,rank2: rank2,rating2: rating2,reviewcount2: reviewcount2,totalthingstodo2: totalthingstodo2,country2: country2,state2: state2,rankpercentage2: rankpercentage2,ancient_ruins2: ancient_ruins2,architectural_buildings2: architectural_buildings2,arenas_stadiums2: arenas_stadiums2,art_galleries2: art_galleries2,art_museums2: art_museums2,auto_race_tracks2: auto_race_tracks2,ballets2: ballets2,battlefields2: battlefields2,biking_trails2: biking_trails2,bodies_of_water2: bodies_of_water2,bridges2: bridges2,castles2: castles2,cemeteries2: cemeteries2,childrens_museums2: childrens_museums2,city_tours2: city_tours2,classes_workshops2: classes_workshops2,coffeehouses2: coffeehouses2,concerts_shows2: concerts_shows2,cultural_tours2: cultural_tours2,educational_sites2: educational_sites2,factory_tours2: factory_tours2,flea_street_markets2: flea_street_markets2,food_drink2: food_drink2,fun_games2: fun_games2,gardens2: gardens2,geologic_formations2: geologic_formations2,gift_specialty_shops2: gift_specialty_shops2,government_buildings2: government_buildings2,historic_sites2: historic_sites2,historic_walking_areas2: historic_walking_areas2,historical_heritage_tours2: historical_heritage_tours2,history_museums2: history_museums2,islands2: islands2,lessons_workshops2: lessons_workshops2,libraries2: libraries2,lighthouses2: lighthouses2,literary_art_music_tours2: literary_art_music_tours2,lookouts2: lookouts2,military_bases_facilities2: military_bases_facilities2,military_museums2: military_museums2,mines2: mines2,monuments_statues2: monuments_statues2,movie_theaters2: movie_theaters2,museums2: museums2,national_parks2: national_parks2,natural_history_museums2: natural_history_museums2,nature_parks2: nature_parks2,nature_wildlife_areas2: nature_wildlife_areas2,neighborhoods2: neighborhoods2,night_tours2: night_tours2,nightlife2: nightlife2,observation_decks_towers2: observation_decks_towers2,observatories_planetariums2: observatories_planetariums2,other_fun_games2: other_fun_games2,other_outdoor_activities2: other_outdoor_activities2,outdoor_activities2: outdoor_activities2,piers_boardwalks2: piers_boardwalks2,playgrounds2: playgrounds2,points_of_interest_landmarks2: points_of_interest_landmarks2,private_tours2: private_tours2,sacred_religious_sites2: sacred_religious_sites2,scenic_railroads2: scenic_railroads2,scenic_walking_areas2: scenic_walking_areas2,science_museums2: science_museums2,selfguided_tours_rentals2: selfguided_tours_rentals2,ships2: ships2,shopping2: shopping2,sights_landmarks2: sights_landmarks2,specialty_museums2: specialty_museums2,sports_complexes2: sports_complexes2,state_parks2: state_parks2,theaters2: theaters2,tours2: tours2,tramways2: tramways2,transportation2: transportation2,traveler_resources2: traveler_resources2,valleys2: valleys2,visitor_centers2: visitor_centers2,volcanos2: volcanos2,walking_tours2: walking_tours2,wineries_vineyards2: wineries_vineyards2,zipline_aerial_adventure_parks2: zipline_aerial_adventure_parks2,zoos_aquariums2: zoos_aquariums2,on_display2: on_display2,gift_shop2: gift_shop2,rainy_day2: rainy_day2,couple_of_hours2: couple_of_hours2,all_ages2: all_ages2,special_exhibits2: special_exhibits2,few_hours2: few_hours2,two_hours2: two_hours2,exhibits2: exhibits2,well_worth_a_visit2: well_worth_a_visit2,permanent_collection2: permanent_collection2,worth_a_visit2: worth_a_visit2,free_admission2: free_admission2,audio_guide2: audio_guide2,beautiful_building2: beautiful_building2,great_collection2: great_collection2,information2: information2,interesting_exhibits2: interesting_exhibits2,entrance_fee2: entrance_fee2,great_for_kids2: great_for_kids2,interactive_exhibits2: interactive_exhibits2,hands_on_activities2: hands_on_activities2,great_exhibits2: great_exhibits2,great_place_to_visit2: great_place_to_visit2,interactive_displays2: interactive_displays2,guided_tour2: guided_tour2,well_worth_the_visit2: well_worth_the_visit2,whole_family2: whole_family2,kids_and_adults2: kids_and_adults2,traveling_exhibits2: traveling_exhibits2,his_life2: his_life2,local_history2: local_history2,amazing_collection2: amazing_collection2,free_entry2: free_entry2,worth_the_trip2: worth_the_trip2,great_history2: great_history2,civil_war2: civil_war2,take_your_time2: take_your_time2,nice_collection2: nice_collection2,interesting_place2: interesting_place2,great_museum2: great_museum2,for_sale2: for_sale2,art_lovers2: art_lovers2,artifacts2: artifacts2,van_gogh2: van_gogh2,audio_tour2: audio_tour2,history2: history2,galleries2: galleries2,works_of_art2: works_of_art2,natural_history2: natural_history2,self_guided_tour2: self_guided_tour2,private_collection2: private_collection2,own_pace2: own_pace2,sculpture_garden2: sculpture_garden2,moving_experience2: moving_experience2,three_hours2: three_hours2,lots_of_history2: lots_of_history2,modern_art2: modern_art2,history_buff2: history_buff2,admission2: admission2,small_museum2: small_museum2,step_back_in_time2: step_back_in_time2,worth_a_stop2: worth_a_stop2,short_film2: short_film2,stuffed_animals2: stuffed_animals2,walk_around2: walk_around2,entry_fee2: entry_fee2,great_displays2: great_displays2,world_war2: world_war2,scavenger_hunt2: scavenger_hunt2,across_the_street2: across_the_street2,museums22: museums22,top_floor2: top_floor2,a_lot_of_fun2: a_lot_of_fun2,history_lesson2: history_lesson2,large_collection2: large_collection2,eye_opening2: eye_opening2,american_history2: american_history2,interesting_artifacts2: interesting_artifacts2,early_days2: early_days2,rotating_exhibits2: rotating_exhibits2,extensive_collection2: extensive_collection2,three_floors2: three_floors2,we_spent_hours2: we_spent_hours2,displays2: displays2,changing_exhibits2: changing_exhibits2,second_floor2: second_floor2,collection2: collection2,old_masters2: old_masters2,great_place_to_learn2: great_place_to_learn2,learn_something2: learn_something2,special_exhibitions2: special_exhibitions2,suggested_donation2: suggested_donation2,old_west2: old_west2,chronological_order2: chronological_order2,enjoyed_our_visit2: enjoyed_our_visit2,take_pictures2: take_pictures2,third_floor2: third_floor2,the_lower_level2: the_lower_level2,life_size2: life_size2,families_count2: families_count2,couples_count2: couples_count2,solo_count2: solo_count2,business_count2: business_count2,friends_count2: friends_count2,preciserating2: preciserating2,quote_pol_var2: quote_pol_var2,quote_pol_mean2: quote_pol_mean2,quote_pol_max2: quote_pol_max2,quote_pol_min2: quote_pol_min2,quote_sub_var2: quote_sub_var2,quote_sub_mean2: quote_sub_mean2,quote_sub_max2: quote_sub_max2,quote_sub_min2: quote_sub_min2,review_pol_var2: review_pol_var2,review_pol_mean2: review_pol_mean2,review_pol_max2: review_pol_max2,review_pol_min2: review_pol_min2,review_sub_var2: review_sub_var2,review_sub_mean2: review_sub_mean2,review_sub_max2: review_sub_max2,review_sub_min2: review_sub_min2,descri_pol2: descri_pol2,descri_sub2: descri_sub2,reviews2: reviews2,
        
      
      });
    
  });  
});






// app.get('/relatedkeyword/:search', function(req, res) {
//   var sql = 'SELECT * from imdb where plot_keywords like ?';
//   db.all(sql, '%'+req.params.search+'%', function(err, rows) {
//     res.send(JSON.stringify(rows));
//   });
// });

// app.get('/relatedgenres/:search', function(req, res) {
//   var sql = 'SELECT * from imdb where genres like ?';
//   db.all(sql, '%'+req.params.search+'%', function(err, rows) {
//     res.send(JSON.stringify(rows));
//   });
// });


// app.get('/relateddirector/:search', function(req, res) {
//   var sql = 'SELECT * from imdb where director_name like ?';
//   db.all(sql, '%'+req.params.search+'%', function(err, rows) {
//     res.send(JSON.stringify(rows));
//   });
// });

// app.get('/relatedactor/:search', function(req, res) {
//   var sql = 'SELECT * from imdb where actor_1_name like ? or actor_2_name like ? or actor_3_name like ?';
//   db.all(sql, '%'+req.params.search+'%', function(err, rows) {
//     res.send(JSON.stringify(rows));
//   });
// });




// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
