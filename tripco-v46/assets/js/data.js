const SITE_CONFIG = {
  brandAr: 'تريبكو',
  brandEn: 'TripCo',
  totalServices: 64,
  launchServices: 18,
  futureServices: 46,
  version: '4.5'
};

const IMAGE_SOURCES = {
  riyadh: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Riyadh_Skyline.jpg',
  jeddah: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Jeddah_Corniche.jpg',
  alula: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Landscape_at_al-Ula%2C_Saudi_Arabia_%281%29.jpg',
  diriyah: 'https://upload.wikimedia.org/wikipedia/commons/7/75/At-Turaif_District.jpg',
  abha: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/ABHA_%286348527614%29.jpg'
};

const SERVICES = [
  ['تخطيط الرحلة','Trip planning','بناء خطة أولية للرحلة حسب المدينة والمدة والميزانية والاهتمامات.','Build a trip plan based on destination, duration, budget and interests.','أساسية جدًا','Core'],
  ['الإقامة','Accommodation','استكشاف الفنادق والشقق والمنتجعات ومقارنتها ضمن واجهة واحدة.','Explore and compare hotels, apartments and resorts in one interface.','أساسية جدًا','Core'],
  ['المواصلات','Transportation','عرض خيارات النقل والتنقل داخل المدن وبينها.','Compare transportation options within and between cities.','أساسية جدًا','Core'],
  ['الخرائط والملاحة','Maps & navigation','الوصول للأماكن والخدمات القريبة وبناء المسارات.','Find nearby places, services and optimized routes.','أساسية جدًا','Core'],
  ['الأماكن السياحية','Attractions','استكشاف المعالم والوجهات والأنشطة حسب المدينة والاهتمام.','Discover attractions and activities by city and interest.','أساسية جدًا','Core'],
  ['المطاعم والمقاهي','Restaurants & cafés','اكتشاف خيارات الطعام والمقاهي المناسبة للسائح.','Discover restaurants and cafés that fit the traveler.','أساسية جدًا','Core'],
  ['الفعاليات','Events','عرض المواسم والفعاليات والأنشطة ضمن أقسام مخصصة.','Browse seasons, events and activities in dedicated hubs.','أساسية جدًا','Core'],
  ['الحجوزات والتذاكر','Bookings & tickets','تجميع روابط الحجز والتذاكر في مكان واحد عند ربط مزودي الخدمة.','Bring booking and ticket options together through provider integrations.','أساسية جدًا','Core'],
  ['برنامج يومي للرحلة','Daily itinerary','تنظيم يوم السائح حسب المسافة والوقت والأولوية.','Organize each day by distance, timing and priority.','أساسية','Essential'],
  ['البحث الذكي','Smart search','بحث مرن حسب المدينة والفئة والميزانية ونوع التجربة.','Flexible search by city, category, budget and experience type.','أساسية','Essential'],
  ['التقييمات والمراجعات','Ratings & reviews','مكان موحد لعرض تقييمات المستخدمين وملاحظاتهم.','View traveler ratings and reviews in one place.','أساسية','Essential'],
  ['أوقات العمل','Opening hours','إظهار حالة المكان ومواعيد العمل عند توفر بيانات مزود الخدمة.','Show live status and opening hours when provider data is available.','أساسية','Essential'],
  ['إدارة الميزانية','Budget management','تقدير ميزانية الرحلة وتقسيمها حسب السكن والنقل والأنشطة.','Estimate and split trip costs across stay, transport and activities.','أساسية','Essential'],
  ['الدفع الإلكتروني','Digital payments','تهيئة المنصة للربط ببوابات الدفع عند الانتقال للإنتاج.','Prepared for secure payment-gateway integration in production.','أساسية','Essential'],
  ['الطقس','Weather','عرض حالة الطقس وربطها باقتراح الأنشطة المناسبة.','Show weather and recommend suitable activities.','أساسية','Essential'],
  ['خدمات الطوارئ','Emergency services','وصول سريع لأرقام وخدمات الطوارئ والمرافق المهمة.','Quick access to emergency numbers and key facilities.','أساسية','Essential'],
  ['اللغة والترجمة','Language & translation','مساعدة الزائر غير الناطق بالعربية على فهم أهم المعلومات.','Help international visitors understand essential information.','أساسية','Essential'],
  ['الإرشاد السياحي','Tourist guidance','شرح مختصر للوجهات وأفضل طرق الاستفادة من الزيارة.','Practical destination guidance and visit tips.','أساسية','Essential'],
  ['الجولات السياحية','Guided tours','استكشاف الجولات الجماعية والخاصة.','Explore private and group guided tours.','مهمة','Important'],
  ['اقتراحات حسب الموقع','Nearby suggestions','اقتراح الخدمات والوجهات القريبة من السائح.','Recommend nearby attractions and services.','مهمة','Important'],
  ['اقتراحات بالذكاء الاصطناعي','AI recommendations','توصيات شخصية مبنية على الاهتمامات والوقت والميزانية.','Personalized recommendations based on interests, time and budget.','مهمة','Important'],
  ['المفضلة','Favorites','حفظ الأماكن والخدمات للرجوع لها لاحقًا.','Save places and services for later.','مهمة','Important'],
  ['مقارنة الخدمات','Service comparison','مقارنة الخيارات ضمن معايير واضحة.','Compare options using clear criteria.','مهمة','Important'],
  ['التنبيهات','Alerts','تنبيهات الحجوزات والمواعيد والتغيرات المهمة.','Receive booking, timing and travel-change alerts.','مهمة','Important'],
  ['معلومات المدينة','City guide','ملخص عملي عن كل مدينة وخصائصها السياحية.','Practical city overviews and travel characteristics.','مهمة','Important'],
  ['الأنشطة والتجارب','Activities & experiences','تجارب بحرية وبرية وثقافية وترفيهية.','Sea, desert, cultural and entertainment experiences.','مهمة','Important'],
  ['السياحة الثقافية','Cultural tourism','الوصول للمواقع التراثية والمتاحف والحرف المحلية.','Discover heritage sites, museums and local crafts.','مهمة','Important'],
  ['السياحة الطبيعية','Nature tourism','الجبال والشواطئ والصحاري والوديان والمحميات.','Explore mountains, beaches, deserts, valleys and reserves.','مهمة','Important'],
  ['السياحة الدينية','Religious tourism','قسم معلومات وإرشادات للزائر وفق طبيعة الوجهة.','Visitor guidance tailored to religious destinations.','مهمة','Important'],
  ['التسوق','Shopping','أسواق ومراكز تسوق ومنتجات محلية.','Markets, malls and local products.','مهمة','Important'],
  ['خدمات العائلات','Family services','تصفية الأماكن حسب ملاءمتها للعائلات والأطفال.','Filter places by family and child friendliness.','مهمة','Important'],
  ['خدمات ذوي الإعاقة','Accessibility','إظهار مستوى سهولة الوصول والخدمات المهيأة.','Show accessibility features and adapted services.','مهمة','Important'],
  ['مواقف السيارات','Parking','إظهار المواقف القريبة ومعلوماتها عند توفر الربط.','Find nearby parking and availability where supported.','مهمة','Important'],
  ['الإنترنت والاتصالات','Connectivity','معلومات عن شرائح الاتصال والاتصال بالإنترنت.','Information about SIMs, connectivity and internet access.','مهمة','Important'],
  ['صرف العملات','Currency exchange','أدوات مساعدة ومعلومات عن خدمات الصرف.','Currency tools and exchange-service information.','فرعية','Supporting'],
  ['أجهزة الصراف والبنوك','ATMs & banks','العثور على أقرب أجهزة الصراف والخدمات البنكية.','Find nearby ATMs and banking services.','فرعية','Supporting'],
  ['دورات المياه العامة','Public restrooms','تحديد أقرب المرافق المتاحة عند توفر البيانات.','Locate nearby public restrooms when data is available.','فرعية','Supporting'],
  ['محطات الوقود والشحن','Fuel & EV charging','البحث عن الوقود ومحطات شحن المركبات الكهربائية.','Find fuel stations and EV chargers.','فرعية','Supporting'],
  ['مغاسل الملابس','Laundry','خدمة مساعدة للزوار لفترات طويلة.','Find laundry services for longer stays.','فرعية','Supporting'],
  ['الخدمات الطبية','Medical services','مستشفيات وعيادات وصيدليات وخدمات صحية قريبة.','Nearby hospitals, clinics, pharmacies and healthcare.','فرعية','Supporting'],
  ['المفقودات','Lost & found','إرشادات الإبلاغ والمتابعة عند فقدان أغراض.','Guidance for reporting and tracking lost items.','فرعية','Supporting'],
  ['خدمة العملاء','Customer support','قنوات دعم واستفسارات موحدة.','Unified help and support channels.','فرعية','Supporting'],
  ['العادات والقوانين','Local customs & rules','إرشادات عامة تساعد السائح على فهم الأنظمة والعادات.','Practical guidance on local customs and rules.','فرعية','Supporting'],
  ['التقويم المحلي','Local calendar','المناسبات والمواسم والإجازات المهمة للسائح.','Key dates, seasons and public occasions.','فرعية','Supporting'],
  ['معلومات التأشيرة','Visa information','روابط وإرشادات للمصادر الرسمية المتعلقة بالتأشيرات.','Guidance and links to official visa resources.','فرعية','Supporting'],
  ['التأمين السياحي','Travel insurance','معلومات عن خيارات التأمين والخدمات المرتبطة به.','Information about travel insurance options.','فرعية','Supporting'],
  ['أفضل مواقع التصوير','Photo spots','اقتراح أماكن التصوير وتوقيتات مناسبة بشكل إرشادي.','Recommend scenic photo spots and suitable times.','فرعية','Supporting'],
  ['مشاركة الرحلة','Trip sharing','مشاركة برنامج الرحلة مع الأصدقاء والعائلة.','Share itineraries with friends and family.','فرعية','Supporting'],
  ['الرحلات الجماعية','Group trips','تنظيم خطة مشتركة لمجموعة من المسافرين.','Coordinate a shared itinerary for groups.','فرعية','Supporting'],
  ['تقسيم المصاريف','Expense splitting','تقسيم تكاليف الرحلة بين أفراد المجموعة.','Split travel costs across group members.','فرعية','Supporting'],
  ['خريطة بدون إنترنت','Offline maps','إتاحة أجزاء محفوظة من الرحلة للاستخدام دون اتصال.','Save trip areas for limited offline access.','فرعية','Supporting'],
  ['مساعد سياحي صوتي','Voice assistant','التفاعل صوتيًا مع المساعد السياحي.','Interact with the tourism assistant by voice.','فرعية','Supporting'],
  ['مرشد AI شخصي','Personal AI guide','مساعد ذكي يصنع اقتراحات مخصصة طوال الرحلة.','An AI travel companion with personalized suggestions.','متقدمة','Advanced'],
  ['تحسين المسار تلقائيًا','Automatic route optimization','ترتيب الوجهات لتقليل الوقت والمسافات.','Optimize stop order to reduce time and distance.','متقدمة','Advanced'],
  ['إعادة تخطيط الرحلة','Dynamic replanning','إعادة بناء الخطة عند تغير الظروف أو المواعيد.','Rebuild itineraries when plans or conditions change.','متقدمة','Advanced'],
  ['التعرف على الأماكن بالكاميرا','Camera place recognition','التعرف على المعلم وعرض معلوماته عند توفر التقنية.','Recognize landmarks with the camera and show information.','متقدمة','Advanced'],
  ['الواقع المعزز AR','Augmented reality','طبقات معلومات تفاعلية فوق المعالم.','Interactive information overlays on landmarks.','متقدمة','Advanced'],
  ['دليل صوتي للمواقع','Audio guide','شرح صوتي تلقائي للمواقع والوجهات.','Automatic audio narration for destinations.','متقدمة','Advanced'],
  ['التوصيات الشخصية','Personalized recommendations','اقتراحات تتطور مع تفضيلات المستخدم.','Recommendations that adapt to user preferences.','متقدمة','Advanced'],
  ['توقع الازدحام','Crowd prediction','مؤشرات تساعد على اختيار أوقات زيارة أفضل.','Indicators to help choose less crowded visit times.','متقدمة','Advanced'],
  ['محفظة تذاكر موحدة','Unified ticket wallet','جمع الحجوزات والتذاكر في مكان واحد.','Keep bookings and tickets in one wallet.','متقدمة','Advanced'],
  ['برنامج ولاء','Loyalty program','نقاط ومكافآت مرتبطة باستخدام المنصة وشركائها.','Points and rewards linked to platform partners.','متقدمة','Advanced'],
  ['العروض والكوبونات','Deals & coupons','عروض مخصصة من مزودي الخدمات السياحية.','Personalized offers from tourism providers.','متقدمة','Advanced'],
  ['مراكز الفعاليات الكبرى','Major event hubs','أقسام مستقلة للمواسم والأحداث الكبرى مثل كأس العالم 2034.','Dedicated hubs for major seasons and events such as the 2034 World Cup.','متقدمة','Advanced']
].map((x,i)=>({id:i+1,title:{ar:x[0],en:x[1]},desc:{ar:x[2],en:x[3]},level:{ar:x[4],en:x[5]},phase:i<18?'launch':'future'}));

const DESTINATIONS = [
  {slug:'riyadh',name:{ar:'الرياض',en:'Riyadh'},region:{ar:'المنطقة الوسطى',en:'Central Region'},type:{ar:'مدينة وثقافة',en:'City & culture'},image:IMAGE_SOURCES.riyadh,fallback:'assets/images/city.svg',desc:{ar:'عاصمة نابضة تجمع بين المدينة الحديثة، الثقافة، التسوق والفعاليات الكبرى.',en:'A dynamic capital blending modern city life, culture, shopping and major events.'}},
  {slug:'jeddah',name:{ar:'جدة',en:'Jeddah'},region:{ar:'منطقة مكة المكرمة',en:'Makkah Region'},type:{ar:'بحر وتراث',en:'Sea & heritage'},image:IMAGE_SOURCES.jeddah,fallback:'assets/images/sea.svg',desc:{ar:'بوابة البحر الأحمر؛ واجهة بحرية، تجارب ساحلية وهوية عمرانية حجازية.',en:'Gateway to the Red Sea, with coastal experiences and Hijazi urban heritage.'}},
  {slug:'alula',name:{ar:'العُلا',en:'AlUla'},region:{ar:'منطقة المدينة المنورة',en:'Madinah Region'},type:{ar:'تراث وطبيعة',en:'Heritage & nature'},image:IMAGE_SOURCES.alula,fallback:'assets/images/desert.svg',desc:{ar:'تكوينات صخرية مميزة وتجارب صحراوية ومواقع تاريخية فريدة.',en:'Distinct rock formations, desert experiences and remarkable historic sites.'}},
  {slug:'diriyah',name:{ar:'الدرعية',en:'Diriyah'},region:{ar:'منطقة الرياض',en:'Riyadh Region'},type:{ar:'تراث نجدي',en:'Najdi heritage'},image:IMAGE_SOURCES.diriyah,fallback:'assets/images/heritage.svg',desc:{ar:'عمارة نجدية وهوية تاريخية تمنح الزائر تجربة ثقافية عميقة.',en:'Najdi architecture and a historic identity for an immersive cultural visit.'}},
  {slug:'abha',name:{ar:'أبها',en:'Abha'},region:{ar:'منطقة عسير',en:'Asir Region'},type:{ar:'جبال وطبيعة',en:'Mountains & nature'},image:IMAGE_SOURCES.abha,fallback:'assets/images/mountains.svg',desc:{ar:'مرتفعات وأجواء معتدلة وتجارب جبلية وطبيعة مختلفة عن بقية الوجهات.',en:'Highlands, mild weather and mountain experiences with a distinct landscape.'}},
  {slug:'redsea',name:{ar:'ساحل البحر الأحمر',en:'Red Sea Coast'},region:{ar:'غرب المملكة',en:'Western Saudi Arabia'},type:{ar:'بحر ومغامرات',en:'Sea & adventure'},image:'assets/images/sea.svg',fallback:'assets/images/sea.svg',desc:{ar:'تجارب بحرية وشواطئ وغوص ورحلات قوارب ضمن وجهات متعددة.',en:'Beaches, diving, boating and marine adventures across multiple destinations.'}}
];

const EXPERIENCES = [
  {icon:'◌',title:{ar:'رحلات بحرية',en:'Sea escapes'},desc:{ar:'شواطئ، قوارب، غوص وأنشطة على البحر الأحمر.',en:'Beaches, boats, diving and Red Sea activities.'}},
  {icon:'◇',title:{ar:'رحلات تراثية',en:'Heritage journeys'},desc:{ar:'أحياء تاريخية، عمارة محلية، متاحف وحرف.',en:'Historic districts, local architecture, museums and crafts.'}},
  {icon:'△',title:{ar:'مغامرات جبلية',en:'Mountain adventures'},desc:{ar:'مرتفعات، مسارات، طبيعة وطقس مختلف.',en:'Highlands, trails, nature and cooler climates.'}},
  {icon:'✦',title:{ar:'تجارب صحراوية',en:'Desert experiences'},desc:{ar:'العلا، الكثبان، التخييم ومشاهدة النجوم.',en:'AlUla, dunes, camping and stargazing.'}},
  {icon:'□',title:{ar:'مدينة وفعاليات',en:'City & events'},desc:{ar:'مواسم، ترفيه، مطاعم وتسوق في المدن الكبرى.',en:'Seasons, entertainment, dining and shopping in major cities.'}},
  {icon:'◎',title:{ar:'رحلات عائلية',en:'Family trips'},desc:{ar:'فلترة الوجهات والأنشطة حسب احتياجات العائلة.',en:'Filter destinations and activities for family needs.'}}
];

const SEASONS = [
  {slug:'worldcup2034',title:{ar:'كأس العالم 2034',en:'World Cup 2034'},year:'2034',image:'assets/images/worldcup.svg',desc:{ar:'مركز موسمي خاص يجمع السكن والتنقل والملاعب ومناطق الجماهير والخدمات والتنبيهات.',en:'A dedicated event hub for stays, transport, stadiums, fan zones, services and alerts.'}},
  {slug:'entertainment',title:{ar:'المواسم الترفيهية',en:'Entertainment seasons'},year:{ar:'سنوي',en:'Annual'},image:IMAGE_SOURCES.riyadh,fallback:'assets/images/city.svg',desc:{ar:'فعاليات وحجوزات وخدمات قريبة وخطط يومية مخصصة للموسم.',en:'Events, bookings, nearby services and season-specific daily plans.'}},
  {slug:'national',title:{ar:'المناسبات الوطنية',en:'National occasions'},year:{ar:'سنوي',en:'Annual'},image:IMAGE_SOURCES.diriyah,fallback:'assets/images/heritage.svg',desc:{ar:'دليل للفعاليات والعروض والوجهات المرتبطة بالمناسبات الوطنية.',en:'A guide to events, shows and destinations around national occasions.'}},
  {slug:'sports',title:{ar:'المواسم الرياضية',en:'Sports seasons'},year:{ar:'متغير',en:'Varies'},image:'assets/images/worldcup.svg',desc:{ar:'تجميع البطولات والخدمات المساندة للسائح ضمن واجهة واحدة.',en:'Bring tournaments and supporting travel services into one hub.'}}
];

window.TRIPCO_DATA = { SITE_CONFIG, IMAGE_SOURCES, SERVICES, DESTINATIONS, EXPERIENCES, SEASONS };

/* TripCo v3 extended prototype data */
const BOOKABLES = [
  {id:'city-pass-riyadh',type:'pass',city:'riyadh',title:{ar:'بطاقة مدينة الرياض',en:'Riyadh City Pass'},desc:{ar:'نموذج تجريبي لحزمة تجمع عدة تجارب داخل المدينة.',en:'Demo bundle combining selected city experiences.'},price:189,oldPrice:229,duration:{ar:'يوم كامل',en:'Full day'},badge:{ar:'الأكثر اختيارًا',en:'Popular'},tags:['city','events','family'],image:IMAGE_SOURCES.riyadh,fallback:'assets/images/city.svg'},
  {id:'jeddah-heritage-walk',type:'tour',city:'jeddah',title:{ar:'جولة جدة التاريخية',en:'Historic Jeddah Walk'},desc:{ar:'مسار تجريبي بين العمارة الحجازية والنقاط الثقافية.',en:'Demo walk through Hijazi architecture and cultural points.'},price:95,duration:{ar:'3 ساعات',en:'3 hours'},badge:{ar:'تراث',en:'Heritage'},tags:['heritage','food'],image:IMAGE_SOURCES.jeddah,fallback:'assets/images/sea.svg'},
  {id:'red-sea-cruise',type:'activity',city:'jeddah',title:{ar:'تجربة بحرية على البحر الأحمر',en:'Red Sea Coastal Experience'},desc:{ar:'حزمة تجريبية لرحلة بحرية قصيرة وأنشطة ساحلية.',en:'Demo short coastal trip and marine activities.'},price:275,duration:{ar:'4 ساعات',en:'4 hours'},badge:{ar:'بحر',en:'Sea'},tags:['sea','adventure'],image:'assets/images/sea.svg',fallback:'assets/images/sea.svg'},
  {id:'alula-day',type:'tour',city:'alula',title:{ar:'يوم اكتشاف العُلا',en:'AlUla Discovery Day'},desc:{ar:'برنامج تجريبي يجمع الطبيعة والتراث ونقاط المشاهدة.',en:'Demo day combining nature, heritage and viewpoints.'},price:340,duration:{ar:'8 ساعات',en:'8 hours'},badge:{ar:'تجربة يوم',en:'Day experience'},tags:['heritage','desert','nature'],image:IMAGE_SOURCES.alula,fallback:'assets/images/desert.svg'},
  {id:'diriyah-evening',type:'tour',city:'diriyah',title:{ar:'مساء الدرعية',en:'Diriyah Evening'},desc:{ar:'مسار تجريبي للتراث والمطاعم والمشي المسائي.',en:'Demo heritage, dining and evening walking route.'},price:160,duration:{ar:'4 ساعات',en:'4 hours'},badge:{ar:'مسائي',en:'Evening'},tags:['heritage','food'],image:IMAGE_SOURCES.diriyah,fallback:'assets/images/heritage.svg'},
  {id:'asir-mountain',type:'activity',city:'abha',title:{ar:'تجربة مرتفعات عسير',en:'Asir Highlands Experience'},desc:{ar:'برنامج تجريبي للطبيعة والمطلات والمسارات الجبلية.',en:'Demo nature, viewpoints and mountain trail experience.'},price:225,duration:{ar:'6 ساعات',en:'6 hours'},badge:{ar:'طبيعة',en:'Nature'},tags:['nature','mountain'],image:IMAGE_SOURCES.abha,fallback:'assets/images/mountains.svg'},
  {id:'airport-transfer',type:'transport',city:'all',title:{ar:'نقل من المطار',en:'Airport Transfer'},desc:{ar:'إضافة خدمة نقل تجريبية إلى سلة الرحلة.',en:'Add a demo airport transfer to your trip cart.'},price:85,duration:{ar:'اتجاه واحد',en:'One way'},badge:{ar:'تنقل',en:'Transport'},tags:['transport'],image:'assets/images/city.svg',fallback:'assets/images/city.svg'},
  {id:'sim-connect',type:'connectivity',city:'all',title:{ar:'باقة اتصال للسائح',en:'Visitor Connectivity Pack'},desc:{ar:'عنصر تجريبي يوضح دمج خدمات الاتصال ضمن الرحلة.',en:'Demo item showing connectivity integration in the trip.'},price:55,duration:{ar:'7 أيام',en:'7 days'},badge:{ar:'اتصال',en:'Connectivity'},tags:['connectivity'],image:'assets/images/city.svg',fallback:'assets/images/city.svg'},
  {id:'family-bundle',type:'bundle',city:'all',title:{ar:'حزمة عائلية',en:'Family Bundle'},desc:{ar:'مجموعة خدمات تجريبية للعائلات تشمل اقتراحات ونقل وأولوية تنظيم.',en:'Demo family bundle with planning, mobility and curated suggestions.'},price:299,duration:{ar:'يومان',en:'2 days'},badge:{ar:'عائلي',en:'Family'},tags:['family'],image:'assets/images/heritage.svg',fallback:'assets/images/heritage.svg'},
  {id:'audio-guide',type:'digital',city:'all',title:{ar:'الدليل الصوتي الرقمي',en:'Digital Audio Guide'},desc:{ar:'وصول تجريبي إلى شرح صوتي للمعالم المدعومة.',en:'Demo access to audio guidance for supported landmarks.'},price:29,duration:{ar:'مدة الرحلة',en:'Trip duration'},badge:{ar:'رقمي',en:'Digital'},tags:['heritage','accessibility'],image:'assets/images/desert.svg',fallback:'assets/images/desert.svg'},
  {id:'ar-pass',type:'digital',city:'all',title:{ar:'جواز الواقع المعزز',en:'AR Discovery Pass'},desc:{ar:'فتح طبقات واقع معزز تجريبية للمعالم المختارة.',en:'Unlock demo AR layers for selected landmarks.'},price:39,duration:{ar:'مدة الرحلة',en:'Trip duration'},badge:{ar:'AR',en:'AR'},tags:['ar','heritage'],image:'assets/images/pattern.svg',fallback:'assets/images/pattern.svg'},
  {id:'worldcup-kit',type:'event',city:'all',title:{ar:'حزمة زائر 2034',en:'2034 Visitor Kit'},desc:{ar:'نموذج لحزمة موسمية تجمع النقل والتنبيهات والدليل الرقمي.',en:'Demo event bundle combining mobility, alerts and digital guidance.'},price:149,duration:{ar:'يوم الحدث',en:'Event day'},badge:{ar:'2034',en:'2034'},tags:['events','transport'],image:'assets/images/worldcup.svg',fallback:'assets/images/worldcup.svg'}
];

const AR_LANDMARKS = [
  {id:'atturaif',city:'diriyah',name:{ar:'حي الطريف — الدرعية',en:'At-Turaif — Diriyah'},category:{ar:'تراث نجدي',en:'Najdi heritage'},lat:24.7346,lng:46.5754,image:IMAGE_SOURCES.diriyah,fallback:'assets/images/heritage.svg',summary:{ar:'طبقة واقع معزز تجريبية تعرض نقاطًا تعريفية على العمارة والمسار التاريخي.',en:'Demo AR layer showing contextual points across the historic architecture and route.'},layers:[{ar:'قصة المكان',en:'Site story'},{ar:'تفاصيل العمارة',en:'Architecture details'},{ar:'الخدمات القريبة',en:'Nearby services'}]},
  {id:'albalad',city:'jeddah',name:{ar:'جدة التاريخية — البلد',en:'Historic Jeddah — Al-Balad'},category:{ar:'تراث حجازي',en:'Hijazi heritage'},lat:21.4858,lng:39.1871,image:IMAGE_SOURCES.jeddah,fallback:'assets/images/heritage.svg',summary:{ar:'مسار بصري تجريبي للتعرف على الرواشين والممرات والنقاط الثقافية.',en:'Demo visual route for mashrabiya, alleys and cultural points.'},layers:[{ar:'العمارة الحجازية',en:'Hijazi architecture'},{ar:'مسار المشي',en:'Walking route'},{ar:'نقاط التصوير',en:'Photo spots'}]},
  {id:'hegra',city:'alula',name:{ar:'الحِجر — العُلا',en:'Hegra — AlUla'},category:{ar:'آثار وصحراء',en:'Archaeology & desert'},lat:26.7917,lng:37.9525,image:IMAGE_SOURCES.alula,fallback:'assets/images/desert.svg',summary:{ar:'نموذج AR يضيف بطاقات معلومات واتجاهات أثناء استكشاف الموقع.',en:'AR prototype adding information cards and orientation while exploring the site.'},layers:[{ar:'شرح المعالم',en:'Landmark notes'},{ar:'اتجاه الجولة',en:'Tour direction'},{ar:'إرشادات الزيارة',en:'Visit guidance'}]},
  {id:'elephant-rock',city:'alula',name:{ar:'جبل الفيل — العُلا',en:'Elephant Rock — AlUla'},category:{ar:'طبيعة',en:'Nature'},lat:26.7027,lng:37.9849,image:IMAGE_SOURCES.alula,fallback:'assets/images/desert.svg',summary:{ar:'طبقة تساعد على قراءة المشهد الطبيعي وتحديد زوايا المشاهدة بصورة تفاعلية.',en:'Interactive layer for reading the landscape and highlighting viewing angles.'},layers:[{ar:'زاوية المشاهدة',en:'Viewing angle'},{ar:'معلومات طبيعية',en:'Nature notes'},{ar:'أفضل وقت',en:'Best time'}]},
  {id:'rijal-almaa',city:'abha',name:{ar:'رجال ألمع — عسير',en:'Rijal Almaa — Asir'},category:{ar:'قرية تراثية',en:'Heritage village'},lat:18.2129,lng:42.2750,image:IMAGE_SOURCES.abha,fallback:'assets/images/mountains.svg',summary:{ar:'تجربة AR تجريبية تربط المباني التراثية بالمعلومات والقصص المحلية.',en:'Demo AR experience connecting heritage buildings to contextual local stories.'},layers:[{ar:'هوية المباني',en:'Building identity'},{ar:'المسار المقترح',en:'Suggested route'},{ar:'نقاط الراحة',en:'Rest points'}]},
  {id:'farasan',city:'jazan',name:{ar:'جزر فرسان — جازان',en:'Farasan Islands — Jazan'},category:{ar:'بحر وطبيعة',en:'Sea & nature'},lat:16.7022,lng:42.1167,image:'assets/images/sea.svg',fallback:'assets/images/sea.svg',summary:{ar:'نموذج بحري للواقع المعزز يوضح الاتجاهات والنقاط البيئية والخدمات.',en:'Marine AR prototype with orientation, environmental points and services.'},layers:[{ar:'الاتجاهات',en:'Orientation'},{ar:'النقاط البيئية',en:'Eco points'},{ar:'الخدمات',en:'Services'}]},
  {id:'edge-world',city:'riyadh',name:{ar:'حافة العالم — منطقة الرياض',en:'Edge of the World — Riyadh Region'},category:{ar:'طبيعة ومغامرة',en:'Nature & adventure'},lat:24.9475,lng:45.9863,image:'assets/images/desert.svg',fallback:'assets/images/desert.svg',summary:{ar:'طبقة استكشاف تجريبية تعرض نقاط الاهتمام واتجاهات المشاهدة والتنبيه للسلامة.',en:'Demo exploration layer with points of interest, viewing orientation and safety reminders.'},layers:[{ar:'المشهد',en:'Landscape'},{ar:'المسار',en:'Route'},{ar:'السلامة',en:'Safety'}]},
  {id:'alqarah',city:'alahsa',name:{ar:'جبل القارة — الأحساء',en:'Al-Qarah Mountain — Al Ahsa'},category:{ar:'طبيعة وثقافة',en:'Nature & culture'},lat:25.4112,lng:49.6923,image:'assets/images/mountains.svg',fallback:'assets/images/mountains.svg',summary:{ar:'تجربة تعريفية تفاعلية للمعالم الطبيعية والمسارات والمواقع المحيطة.',en:'Interactive guide to natural features, routes and nearby points.'},layers:[{ar:'التكوين الطبيعي',en:'Natural formation'},{ar:'المسارات',en:'Routes'},{ar:'حولك الآن',en:'Around you'}]}
];

const TRIP_POIS = {
  riyadh:[
    {id:'r1',name:{ar:'منطقة تراثية وثقافية',en:'Heritage & culture district'},zone:'heritage',tags:['heritage','culture'],cost:45,time:'09:00',duration:150},
    {id:'r2',name:{ar:'متحف وتجربة معرفية',en:'Museum & learning experience'},zone:'central',tags:['heritage','family'],cost:35,time:'12:30',duration:110},
    {id:'r3',name:{ar:'مطل حضري وتجربة مدينة',en:'City viewpoint experience'},zone:'city',tags:['city','photo'],cost:75,time:'17:00',duration:120},
    {id:'r4',name:{ar:'مطاعم وتجربة مسائية',en:'Dining & evening experience'},zone:'city',tags:['food','events'],cost:130,time:'20:00',duration:120},
    {id:'r5',name:{ar:'طبيعة خارج المدينة',en:'Nature outside the city'},zone:'outer',tags:['nature','adventure'],cost:160,time:'08:00',duration:300},
    {id:'r6',name:{ar:'سوق محلي وتسوق',en:'Local market & shopping'},zone:'central',tags:['shopping','food'],cost:90,time:'16:00',duration:120}
  ],
  jeddah:[
    {id:'j1',name:{ar:'جدة التاريخية',en:'Historic Jeddah'},zone:'balad',tags:['heritage','culture','photo'],cost:35,time:'09:00',duration:160},
    {id:'j2',name:{ar:'واجهة بحرية',en:'Waterfront'},zone:'coast',tags:['sea','family','photo'],cost:25,time:'16:30',duration:150},
    {id:'j3',name:{ar:'تجربة مأكولات حجازية',en:'Hijazi food experience'},zone:'balad',tags:['food','heritage'],cost:110,time:'13:30',duration:100},
    {id:'j4',name:{ar:'رحلة بحرية قصيرة',en:'Short sea trip'},zone:'coast',tags:['sea','adventure'],cost:240,time:'10:00',duration:210},
    {id:'j5',name:{ar:'متحف وفنون',en:'Museum & arts'},zone:'central',tags:['culture','family'],cost:55,time:'11:00',duration:120},
    {id:'j6',name:{ar:'مساء على الكورنيش',en:'Corniche evening'},zone:'coast',tags:['sea','food','events'],cost:85,time:'19:00',duration:150}
  ],
  alula:[
    {id:'a1',name:{ar:'مسار تراثي',en:'Heritage route'},zone:'heritage',tags:['heritage','culture'],cost:120,time:'08:30',duration:210},
    {id:'a2',name:{ar:'تكوينات صخرية',en:'Rock formations'},zone:'nature',tags:['nature','photo','desert'],cost:70,time:'16:00',duration:150},
    {id:'a3',name:{ar:'تجربة صحراوية',en:'Desert experience'},zone:'desert',tags:['adventure','desert'],cost:260,time:'15:00',duration:240},
    {id:'a4',name:{ar:'سوق وتجربة محلية',en:'Local market experience'},zone:'oldtown',tags:['food','shopping','heritage'],cost:90,time:'19:00',duration:120},
    {id:'a5',name:{ar:'مشاهدة النجوم',en:'Stargazing'},zone:'desert',tags:['nature','photo'],cost:180,time:'21:00',duration:150},
    {id:'a6',name:{ar:'واحة ومشي',en:'Oasis walk'},zone:'oldtown',tags:['nature','family'],cost:30,time:'10:30',duration:100}
  ],
  diriyah:[
    {id:'d1',name:{ar:'حي الطريف',en:'At-Turaif'},zone:'heritage',tags:['heritage','culture','photo'],cost:60,time:'09:00',duration:170},
    {id:'d2',name:{ar:'ممشى وتجربة ضيافة',en:'Walk & hospitality'},zone:'heritage',tags:['food','heritage'],cost:120,time:'13:00',duration:120},
    {id:'d3',name:{ar:'تجربة مسائية',en:'Evening experience'},zone:'heritage',tags:['events','food'],cost:150,time:'18:30',duration:170},
    {id:'d4',name:{ar:'تصوير معماري',en:'Architecture photo route'},zone:'heritage',tags:['photo','culture'],cost:20,time:'16:00',duration:90}
  ],
  abha:[
    {id:'b1',name:{ar:'مطل جبلي',en:'Mountain viewpoint'},zone:'mountain',tags:['nature','photo'],cost:25,time:'08:00',duration:120},
    {id:'b2',name:{ar:'قرية تراثية',en:'Heritage village'},zone:'heritage',tags:['heritage','culture'],cost:55,time:'11:00',duration:160},
    {id:'b3',name:{ar:'مسار طبيعة',en:'Nature trail'},zone:'mountain',tags:['nature','adventure'],cost:40,time:'15:00',duration:180},
    {id:'b4',name:{ar:'مقهى وتجربة محلية',en:'Local café experience'},zone:'city',tags:['food','family'],cost:70,time:'19:00',duration:100},
    {id:'b5',name:{ar:'سوق حرف محلية',en:'Local craft market'},zone:'city',tags:['shopping','culture'],cost:65,time:'17:00',duration:100}
  ]
};

const FEATURE_FLAGS = {
  augmentedReality:true,
  tripCart:true,
  smartPlanner:true,
  bilingual:true,
  pwa:true,
  localAccounts:true,
  offlineShell:true
};

// Broaden destination coverage for the redesigned platform.
DESTINATIONS.push(
  {slug:'taif',name:{ar:'الطائف',en:'Taif'},region:{ar:'منطقة مكة المكرمة',en:'Makkah Region'},type:{ar:'مرتفعات وطبيعة',en:'Highlands & nature'},image:'assets/images/mountains.svg',fallback:'assets/images/mountains.svg',desc:{ar:'أجواء مرتفعة ومزارع وتجارب طبيعية مناسبة للرحلات الموسمية.',en:'Highland atmosphere, farms and nature experiences for seasonal trips.'}},
  {slug:'alahsa',name:{ar:'الأحساء',en:'Al Ahsa'},region:{ar:'المنطقة الشرقية',en:'Eastern Province'},type:{ar:'واحة وتراث',en:'Oasis & heritage'},image:'assets/images/heritage.svg',fallback:'assets/images/heritage.svg',desc:{ar:'واحة وثقافة محلية ومعالم طبيعية وتجارب تراثية متنوعة.',en:'Oasis landscapes, local culture, natural features and heritage experiences.'}},
  {slug:'jazan',name:{ar:'جازان',en:'Jazan'},region:{ar:'منطقة جازان',en:'Jazan Region'},type:{ar:'جزر وساحل',en:'Islands & coast'},image:'assets/images/sea.svg',fallback:'assets/images/sea.svg',desc:{ar:'ساحل وجزر وطبيعة جنوبية تجمع البحر بالثقافة المحلية.',en:'Coast, islands and southern landscapes blending sea and local culture.'}},
  {slug:'tabuk',name:{ar:'تبوك',en:'Tabuk'},region:{ar:'منطقة تبوك',en:'Tabuk Region'},type:{ar:'طبيعة وشمال',en:'Nature & north'},image:'assets/images/desert.svg',fallback:'assets/images/desert.svg',desc:{ar:'تضاريس متنوعة ورحلات برية وساحلية ضمن شمال غرب المملكة.',en:'Varied landscapes with road and coastal experiences in northwest Saudi Arabia.'}},
  {slug:'madinah',name:{ar:'المدينة المنورة',en:'Madinah'},region:{ar:'منطقة المدينة المنورة',en:'Madinah Region'},type:{ar:'ثقافة وزيارة',en:'Culture & visit'},image:'assets/images/city.svg',fallback:'assets/images/city.svg',desc:{ar:'خدمات زيارة وتنقل وإرشاد ثقافي ضمن تجربة منظمة تحترم طبيعة الوجهة.',en:'Visit, mobility and cultural guidance within an organized experience respectful of the destination.'}}
);

Object.assign(window.TRIPCO_DATA,{BOOKABLES,AR_LANDMARKS,TRIP_POIS,FEATURE_FLAGS});


/* TripCo v4.6 — integrated booking, flights and World Cup 2034 demo data */
const HOTELS = [
  {id:'hotel-jed-marina',city:'jeddah',name:{ar:'فندق مرسى البحر الأحمر',en:'Red Sea Marina Hotel'},area:{ar:'واجهة جدة البحرية',en:'Jeddah Waterfront'},stars:5,rating:4.8,reviews:1240,price:690,oldPrice:820,features:{ar:['إطلالة بحرية','إفطار','مسبح','موقف سيارات'],en:['Sea view','Breakfast','Pool','Parking']},image:'assets/images/sea.svg',bookableId:'hotel-jed-marina-room'},
  {id:'hotel-jed-balad',city:'jeddah',name:{ar:'دار البلد التراثية',en:'Al-Balad Heritage Stay'},area:{ar:'جدة التاريخية',en:'Historic Jeddah'},stars:4,rating:4.7,reviews:860,price:430,features:{ar:['قريب من المعالم','إفطار','طابع تراثي','واي فاي'],en:['Near attractions','Breakfast','Heritage style','Wi-Fi']},image:'assets/images/heritage.svg',bookableId:'hotel-jed-balad-room'},
  {id:'hotel-ruh-najd',city:'riyadh',name:{ar:'فندق بوابة نجد',en:'Najd Gate Hotel'},area:{ar:'وسط الرياض',en:'Central Riyadh'},stars:5,rating:4.6,reviews:1530,price:610,features:{ar:['نادي صحي','إفطار','مركز أعمال','نقل اختياري'],en:['Wellness','Breakfast','Business center','Optional transfer']},image:'assets/images/city.svg',bookableId:'hotel-ruh-najd-room'},
  {id:'hotel-diriyah',city:'diriyah',name:{ar:'نُزل الدرعية',en:'Diriyah Lodge'},area:{ar:'قرب المنطقة التراثية',en:'Near heritage district'},stars:4,rating:4.8,reviews:590,price:540,features:{ar:['تصميم نجدي','فناء داخلي','إفطار','مواقف'],en:['Najdi design','Courtyard','Breakfast','Parking']},image:'assets/images/heritage.svg',bookableId:'hotel-diriyah-room'},
  {id:'hotel-alula-oasis',city:'alula',name:{ar:'منتجع واحة العُلا',en:'AlUla Oasis Resort'},area:{ar:'العُلا',en:'AlUla'},stars:5,rating:4.9,reviews:740,price:1180,features:{ar:['إطلالة صحراوية','نقل للمعالم','مسبح','إفطار'],en:['Desert view','Attraction shuttle','Pool','Breakfast']},image:'assets/images/desert.svg',bookableId:'hotel-alula-oasis-room'},
  {id:'hotel-abha-cloud',city:'abha',name:{ar:'فندق سحاب عسير',en:'Asir Cloud Hotel'},area:{ar:'أبها',en:'Abha'},stars:4,rating:4.5,reviews:420,price:390,features:{ar:['إطلالة جبلية','عائلي','إفطار','موقف سيارات'],en:['Mountain view','Family friendly','Breakfast','Parking']},image:'assets/images/mountains.svg',bookableId:'hotel-abha-cloud-room'},
  {id:'hotel-khobar-gulf',city:'khobar',name:{ar:'فندق الخليج الشرقي',en:'Eastern Gulf Hotel'},area:{ar:'الخبر',en:'Al Khobar'},stars:5,rating:4.6,reviews:970,price:560,features:{ar:['واجهة بحرية','نادي صحي','إفطار','مركز أعمال'],en:['Waterfront','Wellness','Breakfast','Business center']},image:'assets/images/sea.svg',bookableId:'hotel-khobar-gulf-room'},
  {id:'hotel-madinah-visit',city:'madinah',name:{ar:'دار الزائر',en:'Visitor House'},area:{ar:'المدينة المنورة',en:'Madinah'},stars:4,rating:4.7,reviews:1820,price:520,features:{ar:['موقع مركزي','عائلي','إفطار','خدمة استقبال'],en:['Central location','Family friendly','Breakfast','Reception']},image:'assets/images/city.svg',bookableId:'hotel-madinah-visit-room'}
];

const FLIGHT_OFFERS = [
  {id:'flight-jed-ruh-am',from:'JED',to:'RUH',fromCity:{ar:'جدة',en:'Jeddah'},toCity:{ar:'الرياض',en:'Riyadh'},depart:'08:10',arrive:'09:45',duration:'1h 35m',stops:0,airline:{ar:'TripCo Air Demo',en:'TripCo Air Demo'},price:249,cabin:{ar:'اقتصادية',en:'Economy'},bookableId:'flight-jed-ruh-am-ticket'},
  {id:'flight-jed-ruh-pm',from:'JED',to:'RUH',fromCity:{ar:'جدة',en:'Jeddah'},toCity:{ar:'الرياض',en:'Riyadh'},depart:'18:40',arrive:'20:15',duration:'1h 35m',stops:0,airline:{ar:'Desert Wings Demo',en:'Desert Wings Demo'},price:319,cabin:{ar:'اقتصادية مرنة',en:'Flexible economy'},bookableId:'flight-jed-ruh-pm-ticket'},
  {id:'flight-ruh-ulh',from:'RUH',to:'ULH',fromCity:{ar:'الرياض',en:'Riyadh'},toCity:{ar:'العُلا',en:'AlUla'},depart:'10:20',arrive:'12:05',duration:'1h 45m',stops:0,airline:{ar:'TripCo Air Demo',en:'TripCo Air Demo'},price:389,cabin:{ar:'اقتصادية',en:'Economy'},bookableId:'flight-ruh-ulh-ticket'},
  {id:'flight-jed-ahb',from:'JED',to:'AHB',fromCity:{ar:'جدة',en:'Jeddah'},toCity:{ar:'أبها',en:'Abha'},depart:'13:00',arrive:'14:25',duration:'1h 25m',stops:0,airline:{ar:'Coast & Cloud Demo',en:'Coast & Cloud Demo'},price:279,cabin:{ar:'اقتصادية',en:'Economy'},bookableId:'flight-jed-ahb-ticket'},
  {id:'flight-dmm-jed',from:'DMM',to:'JED',fromCity:{ar:'الدمام',en:'Dammam'},toCity:{ar:'جدة',en:'Jeddah'},depart:'07:30',arrive:'09:35',duration:'2h 05m',stops:0,airline:{ar:'Eastern Demo Air',en:'Eastern Demo Air'},price:360,cabin:{ar:'اقتصادية',en:'Economy'},bookableId:'flight-dmm-jed-ticket'},
  {id:'flight-med-ruh',from:'MED',to:'RUH',fromCity:{ar:'المدينة المنورة',en:'Madinah'},toCity:{ar:'الرياض',en:'Riyadh'},depart:'16:10',arrive:'17:35',duration:'1h 25m',stops:0,airline:{ar:'TripCo Air Demo',en:'TripCo Air Demo'},price:265,cabin:{ar:'اقتصادية',en:'Economy'},bookableId:'flight-med-ruh-ticket'}
];

const WC2034_TICKETS = [
  {id:'wc2034-group-demo',title:{ar:'فئة مباراة دور المجموعات — نموذج',en:'Group-stage match category — demo'},category:{ar:'تذكرة مباراة',en:'Match ticket'},price:350,status:'preview',desc:{ar:'بطاقة تجريبية لإظهار شكل اختيار فئة التذكرة وربطها بالسلة. ليست تذكرة رسمية ولا تمثل سعراً معلناً من FIFA.',en:'Prototype card showing how a match-ticket category could connect to the cart. Not an official ticket or FIFA-announced price.'},bookableId:'wc2034-group-demo-ticket'},
  {id:'wc2034-knockout-demo',title:{ar:'فئة الأدوار الإقصائية — نموذج',en:'Knockout-stage category — demo'},category:{ar:'تذكرة مباراة',en:'Match ticket'},price:650,status:'preview',desc:{ar:'نموذج واجهة فقط. التوافر والأسعار النهائية تعتمد على منصة التذاكر الرسمية عند إعلانها.',en:'Interface demo only. Final availability and prices depend on official ticketing when announced.'},bookableId:'wc2034-knockout-demo-ticket'},
  {id:'wc2034-access-demo',title:{ar:'خيار سهولة الوصول — نموذج',en:'Accessibility ticket option — demo'},category:{ar:'سهولة الوصول',en:'Accessibility'},price:350,status:'preview',desc:{ar:'تصور لمسار حجز يراعي احتياجات سهولة الوصول والمرافق المساندة.',en:'Concept booking flow designed around accessibility needs and companion services.'},bookableId:'wc2034-access-demo-ticket'}
];

const WC2034_SERVICES = [
  {id:'tickets',group:'match',icon:'🎫',title:{ar:'التذاكر',en:'Tickets'},desc:{ar:'مركز لمتابعة حالة البيع الرسمية، حفظ المباريات المطلوبة وربط التذكرة بالمحفظة عند توفر الربط الرسمي.',en:'Track official sales status, save desired matches and connect tickets to the wallet when official integration exists.'}},
  {id:'matches',group:'match',icon:'⚽',title:{ar:'المباريات والجدول',en:'Matches & schedule'},desc:{ar:'جدول مباريات قابل للتصفية حسب المدينة واليوم والفريق عند توفر البيانات الرسمية.',en:'Filterable match schedule by city, date and team when official data becomes available.'}},
  {id:'stadiums',group:'match',icon:'🏟',title:{ar:'الملاعب والمداخل',en:'Stadiums & gates'},desc:{ar:'خرائط الوصول، البوابات، أوقات الدخول، الخدمات المحيطة ومعلومات سهولة الوصول.',en:'Access maps, gates, entry timing, nearby services and accessibility information.'}},
  {id:'hotels',group:'travel',icon:'▦',title:{ar:'فنادق البطولة',en:'Tournament hotels'},desc:{ar:'البحث عن السكن حسب المدينة والمسافة من الملعب والميزانية وإضافته إلى سلة الرحلة.',en:'Search stays by city, stadium distance and budget, then add them to the trip cart.'}},
  {id:'flights',group:'travel',icon:'✈',title:{ar:'رحلات الطيران',en:'Flights'},desc:{ar:'البحث عن رحلات داخلية ودولية وربط وقت الوصول بخطة المباراة والسكن.',en:'Search domestic and international flights and align arrival with match and hotel plans.'}},
  {id:'rail',group:'travel',icon:'↔',title:{ar:'التنقل بين المدن',en:'Intercity mobility'},desc:{ar:'رحلات قطار وحافلات ورحلات داخلية مقترحة بين مدن البطولة.',en:'Suggested rail, coach and domestic-flight options between tournament cities.'}},
  {id:'stadium-shuttle',group:'travel',icon:'🚌',title:{ar:'نقل يوم المباراة',en:'Match-day shuttle'},desc:{ar:'مسارات من السكن ومناطق الجماهير إلى الملاعب مع وقت خروج مقترح.',en:'Routes from hotels and fan zones to stadiums with suggested departure times.'}},
  {id:'fan-zones',group:'fan',icon:'◎',title:{ar:'مناطق الجماهير',en:'Fan zones'},desc:{ar:'الفعاليات، شاشات العرض، الطعام، أوقات العمل وطريقة الوصول.',en:'Events, screenings, food, opening hours and directions.'}},
  {id:'food',group:'fan',icon:'◉',title:{ar:'المطاعم والطعام',en:'Food & dining'},desc:{ar:'خيارات قريبة من الملاعب ومناطق الجماهير مع فلاتر الميزانية والحساسية الغذائية.',en:'Dining near stadiums and fan zones with budget and dietary filters.'}},
  {id:'city-pass',group:'fan',icon:'◇',title:{ar:'بطاقة المدينة',en:'City pass'},desc:{ar:'تصور لحزمة نقل ومعالم وتجارب يومية بين أيام المباريات.',en:'Concept pass bundling mobility, attractions and off-match-day experiences.'}},
  {id:'wallet',group:'digital',icon:'▣',title:{ar:'محفظة المشجع',en:'Fan wallet'},desc:{ar:'تجميع التذاكر والحجوزات والخطط والتنبيهات في واجهة واحدة.',en:'Keep tickets, bookings, plans and alerts in one place.'}},
  {id:'alerts',group:'digital',icon:'!',title:{ar:'تنبيهات مباشرة',en:'Live alerts'},desc:{ar:'تنبيهات البوابات، أوقات المغادرة، تغير المواعيد وحالة التنقل عند الربط بالبيانات الحية.',en:'Gate, departure, schedule-change and mobility alerts when live data is integrated.'}},
  {id:'translation',group:'support',icon:'A',title:{ar:'الترجمة واللغة',en:'Translation & language'},desc:{ar:'عبارات أساسية، ترجمة فورية ومساعدة متعددة اللغات للزوار.',en:'Essential phrases, instant translation and multilingual visitor assistance.'}},
  {id:'accessibility',group:'support',icon:'♿',title:{ar:'سهولة الوصول',en:'Accessibility'},desc:{ar:'معلومات المقاعد والمداخل المهيأة والتنقل والخدمات المساندة.',en:'Accessible seating, adapted entrances, mobility and support services.'}},
  {id:'emergency',group:'support',icon:'+',title:{ar:'الطوارئ والدعم',en:'Emergency & support'},desc:{ar:'أرقام ومراكز المساعدة والمرافق الطبية وأقرب نقطة خدمة.',en:'Help contacts, medical facilities and nearest support points.'}},
  {id:'connectivity',group:'support',icon:'⌁',title:{ar:'الاتصال والإنترنت',en:'Connectivity'},desc:{ar:'شرائح اتصال، واي فاي، شحن الأجهزة ونقاط الدعم الرقمية.',en:'SIM options, Wi-Fi, device charging and digital support points.'}},
  {id:'ar',group:'digital',icon:'AR',title:{ar:'AR للملاعب والمناطق',en:'AR for stadiums & zones'},desc:{ar:'طبقات اتجاه ومداخل وخدمات قريبة عبر TripCo AR عند دعمها ميدانياً.',en:'Direction, gate and nearby-service overlays through TripCo AR when field-ready.'}},
  {id:'discover',group:'fan',icon:'⌖',title:{ar:'اكتشف المدينة',en:'Discover the city'},desc:{ar:'أماكن سياحية وتجارب قصيرة تبنى حول وقت المباراة وموقع السكن.',en:'Attractions and short experiences built around match time and hotel location.'}}
];

BOOKABLES.push(
  ...HOTELS.map(h=>({id:h.bookableId,type:'hotel',city:h.city,title:h.name,desc:{ar:`إقامة ليلة واحدة — سعر تجريبي يبدأ من ${h.price} ر.س.`,en:`One-night stay — demo rate from SAR ${h.price}.`},price:h.price,duration:{ar:'ليلة واحدة',en:'1 night'},badge:{ar:'فندق',en:'Hotel'},tags:['hotel','stay'],image:h.image,fallback:h.image})),
  ...FLIGHT_OFFERS.map(f=>({id:f.bookableId,type:'flight',city:'all',title:{ar:`${f.fromCity.ar} ← ${f.toCity.ar}`,en:`${f.fromCity.en} → ${f.toCity.en}`},desc:{ar:`${f.depart} — ${f.arrive} · ${f.airline.ar} · نموذج حجز`,en:`${f.depart} — ${f.arrive} · ${f.airline.en} · booking demo`},price:f.price,duration:{ar:f.duration,en:f.duration},badge:{ar:'طيران',en:'Flight'},tags:['flight','transport'],image:'assets/images/flight.svg',fallback:'assets/images/city.svg'})),
  ...WC2034_TICKETS.map(t=>({id:t.bookableId,type:'wc-ticket',city:'all',title:t.title,desc:t.desc,price:t.price,duration:{ar:'اختيار تجريبي',en:'Demo selection'},badge:{ar:'2034 · غير رسمي',en:'2034 · unofficial'},tags:['2034','ticket','event'],image:'assets/images/worldcup.svg',fallback:'assets/images/worldcup.svg'}))
);

WC2034_SERVICES.push(
  {id:'visa-entry',group:'travel',icon:'ID',title:{ar:'التأشيرة والدخول',en:'Visa & entry'},desc:{ar:'روابط وإرشادات للمصادر الرسمية ومتطلبات الوصول عند توفر تعليمات البطولة.',en:'Official-source guidance for entry and visa requirements when tournament instructions are published.'}},
  {id:'parking',group:'travel',icon:'P',title:{ar:'المواقف',en:'Parking'},desc:{ar:'مواقف قريبة، مواقف تحويلية ومسارات Park & Ride عند توفر البيانات التشغيلية.',en:'Nearby parking, park-and-ride and shuttle connections when operational data is available.'}},
  {id:'rideshare',group:'travel',icon:'R',title:{ar:'سيارات الأجرة والنقل التشاركي',en:'Taxi & ride-hailing'},desc:{ar:'نقاط الالتقاء والإنزال ومسارات العودة بعد المباراة.',en:'Pick-up, drop-off and post-match return zones.'}},
  {id:'luggage',group:'travel',icon:'BAG',title:{ar:'حفظ الأمتعة',en:'Luggage storage'},desc:{ar:'خيارات حفظ الأمتعة في المحطات والمناطق السياحية حسب التوفر.',en:'Luggage-storage options near stations and visitor districts when available.'}},
  {id:'medical',group:'support',icon:'MED',title:{ar:'الخدمات الطبية',en:'Medical services'},desc:{ar:'أقرب عيادة أو مستشفى أو نقطة إسعاف مع إرشادات الوصول.',en:'Nearest clinic, hospital or first-aid point with directions.'}},
  {id:'lost-found',group:'support',icon:'?',title:{ar:'المفقودات',en:'Lost & found'},desc:{ar:'إرشاد موحد للإبلاغ عن أغراض مفقودة في الملاعب والنقل ومناطق الجماهير.',en:'Unified guidance for lost property across stadiums, transport and fan zones.'}},
  {id:'family',group:'support',icon:'FAM',title:{ar:'خدمات العائلات',en:'Family services'},desc:{ar:'مداخل مناسبة، مناطق انتظار، احتياجات الأطفال وخيارات فعاليات عائلية.',en:'Family-friendly entrances, waiting areas, child needs and activities.'}},
  {id:'prayer',group:'support',icon:'◌',title:{ar:'مرافق الصلاة',en:'Prayer facilities'},desc:{ar:'عرض المواقع المتاحة داخل المناطق العامة والملاعب عند اعتماد الخرائط التشغيلية.',en:'Show available facilities in public areas and stadiums when operational maps are confirmed.'}},
  {id:'atm',group:'support',icon:'SAR',title:{ar:'الصراف والدفع',en:'ATM & payments'},desc:{ar:'أقرب صراف وخيارات الدفع والخدمات المالية المساندة للزائر.',en:'Nearby ATMs, payment options and visitor financial services.'}},
  {id:'weather',group:'digital',icon:'WX',title:{ar:'الطقس والاستعداد',en:'Weather & readiness'},desc:{ar:'تنبيهات الطقس واقتراحات الاستعداد لوقت المباراة والتنقل.',en:'Weather alerts and readiness suggestions for match time and travel.'}},
  {id:'merch',group:'fan',icon:'SHOP',title:{ar:'المتاجر والتذكارات',en:'Shops & souvenirs'},desc:{ar:'دليل للمتاجر الرسمية ونقاط البيع المعتمدة عند الإعلان عنها.',en:'Guide to official and authorized retail points when announced.'}},
  {id:'info-desks',group:'support',icon:'i',title:{ar:'مراكز معلومات الزوار',en:'Visitor information desks'},desc:{ar:'مواقع مراكز المساعدة والمتطوعين وخدمات الاستفسار.',en:'Locations for help desks, volunteers and visitor assistance.'}},
  {id:'anti-fraud',group:'digital',icon:'✓',title:{ar:'التحقق من قنوات التذاكر',en:'Ticket-channel verification'},desc:{ar:'تنبيهات توعوية لتوجيه المستخدم نحو القنوات الرسمية وتجنب التذاكر غير الموثوقة.',en:'Safety prompts that direct users toward official channels and away from unverified tickets.'}},
  {id:'customs',group:'support',icon:'GUIDE',title:{ar:'دليل الأنظمة والعادات',en:'Rules & local customs'},desc:{ar:'إرشادات مختصرة للزائر عن الأنظمة والسلوك والخدمات العامة.',en:'Concise visitor guidance for local rules, conduct and public services.'}},
  {id:'city-events',group:'fan',icon:'EVT',title:{ar:'فعاليات المدينة',en:'City events'},desc:{ar:'حفلات وتجارب ثقافية وفعاليات مصاحبة بين أيام المباريات.',en:'Concerts, cultural experiences and side events between match days.'}}
);

Object.assign(window.TRIPCO_DATA,{HOTELS,FLIGHT_OFFERS,WC2034_TICKETS,WC2034_SERVICES});
