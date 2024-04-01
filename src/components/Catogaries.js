import React from "react"
import { View, Text, StatusBar, FlatList, TouchableOpacity, Image } from "react-native"
import { images } from '../../constants';
import * as Animatable from 'react-native-animatable';
export default class Catogaries extends React.Component {
    constructor() {
        super()
        this.state = {
            Catogaries_arr: [
                {
                    image: images.directions,
                    lable: "الأتجاهات",
                    id: 1,
                    All_catogary_arr: [
                        {
                            image: images.above,
                            name: "فوق",
                            voice: null

                        },
                        {
                            image: images.behind,
                            name: "خلف",
                            voice: null

                        },
                        {
                            image: images.below,
                            name: "تحت",
                            voice: null

                        },
                        {
                            image: images.between,
                            name: "بين",
                            voice: null

                        },
                        {
                            image: images.bottom,
                            name: "للاسفل",
                            voice: null

                        },
                        {
                            image: images.by,
                            name: "بواسطه",
                            voice: null

                        },
                        {
                            image: images.done,
                            name: "صحيح",
                            voice: null

                        },
                        {
                            image: images.false1,
                            name: "خطأ",
                            voice: null,
                        },
                        {
                            image: images.in_box,
                            name: "بداخل",
                            voice: null,

                        },
                        {
                            image: images.infrontof,
                            name: "امام",
                            voice: null,

                        },
                        {
                            image: images.left,
                            name: "يسار",
                            voice: null,

                        },
                        {
                            image: images.right,
                            name: "يمين",
                            voice: null

                        },
                        {
                            image: images.up,
                            name: "للاعلي",
                            voice: null

                        },



                    ]
                },
                {
                    image: images.d_size,
                    lable: " الاحجام",
                    id: 2,
                    All_catogary_arr: [
                        {
                            image: images.big_women,
                            name: "كبيره السن ",
                            voice: null,


                        },
                        {
                            image: images.cheating,
                            name: "سمين",
                            voice: null

                        },
                        {
                            image: images.muscles,
                            name: "كبير العضلات",

                        },
                        {
                            image: images.slim,
                            name: "نحيف",
                            voice: null

                        },
                        {
                            image: images.young,
                            name: "شاب",
                            voice: null

                        },



                    ]
                },
                {
                    image: images.furniture,
                    lable: "الأثاث",
                    id: 3,

                    All_catogary_arr: [
                        {
                            image: images.bath_room,
                            name: "حمام",
                            voice: null

                        },
                        {
                            image: images.bed,
                            name: "سرير",
                            voice: null

                        },
                        {
                            image: images.chair,
                            name: "كرسي",
                            voice: null

                        },
                        {
                            image: images.children_bed,
                            name: "سرير اطفال",
                            voice: null

                        },
                        {
                            image: images.clock,
                            name: "ساعه",
                            voice: null

                        },
                        {
                            image: images.dining_table,
                            name: "سفره",
                            voice: null

                        },
                        {
                            image: images.dolap,
                            name: "دولاب",
                            voice: null

                        },
                        {
                            image: images.kanaba,
                            name: "كنبه",
                            voice: null

                        },
                        {
                            image: images.kitchen,
                            name: "مطبخ",
                            voice: null

                        },
                        {
                            image: images.libarary,
                            name: "مكتبه",
                            voice: null

                        },
                        {
                            image: images.living_room,
                            name: "غرفه المعيشه",
                            voice: null

                        },
                        {
                            image: images.mirror,
                            name: "مراه",
                            voice: null

                        },
                        {
                            image: images.office,
                            name: "مكتب",
                            voice: null

                        },
                        {
                            image: images.piano,
                            name: "بيانو",
                            voice: null

                        },
                        {
                            image: images.salem,
                            name: "سلم",
                            voice: null

                        },
                        {
                            image: images.table,
                            name: "طاوله",
                            voice: null

                        },


                    ]
                },
                {
                    image: images.family,
                    lable: "العائله ",
                    id: 4,
                    All_catogary_arr: [
                        {
                            image: images.aunt,
                            name: "عمه",
                            voice: null

                        },
                        {
                            image: images.brother,
                            name: "اخ",
                            voice: null

                        },
                        {
                            image: images.cousin,
                            name: "ابن العم او ابن الخال",
                            voice: null

                        },
                        {
                            image: images.father,
                            name: "اب",
                            voice: null

                        },
                        {
                            image: images.grandfather,
                            name: "جد",
                            voice: null

                        },
                        {
                            image: images.grandmother,
                            name: "جده",
                            voice: null

                        },
                        {
                            image: images.mother,
                            name: "ام",
                            voice: null

                        },
                        {
                            image: images.nephew,
                            name: "ابن الاخ",
                            voice: null

                        },
                        {
                            image: images.sister,
                            name: "اخت",
                            voice: null

                        },
                        {
                            image: images.uncle,
                            name: "عم",
                            voice: null

                        },


                    ]
                },
                {
                    image: images.animals,
                    lable: "الحيوانات",
                    id: 5,
                    All_catogary_arr: [
                        {
                            image: images.ant,
                            name: "نمله",
                            voice: null
                        },
                        {
                            image: images.bat,
                            name: "خفاش",
                            voice: null
                        },
                        {
                            image: images.bird,
                            name: "طائر",
                            voice: require("../../assets/Records/ES_MorningForestBirds4.mp3")
                        },
                        {
                            image: images.bee,
                            name: "نحله",
                            voice: null

                        },
                        {
                            image: images.butterfly,
                            name: "فراشه",
                            voice: null
                        },
                        {
                            image: images.camal,
                            name: "جمل",
                            voice: null
                        },
                        {
                            image: images.checken,
                            name: "دجاجه",
                            voice: require("../../assets/Records/ES_ChickenSquawk1.mp3")
                        },
                        {
                            image: images.cow,
                            name: "بقره",
                            voice: require("../../assets/Records/ES_CowMoo1.mp3")
                        },
                        {
                            image: images.dog,
                            name: "كلب",
                            voice: require("../../assets/Records/ES_DogBark.mp3")
                        },
                        {
                            image: images.dolphin,
                            name: "دولفين",
                            voice: null
                        },
                        {
                            image: images.donkey,
                            name: "حمار",
                            voice: require("../../assets/Records/ES_DonkeySnort.mp3")
                        },
                        {
                            image: images.duck,
                            name: "بطه",
                            voice: null
                        },
                        {
                            image: images.elephant,
                            name: "فيل",
                            voice: require("../../assets/Records/ES_ElephantRoars.mp3")
                        },
                        {
                            image: images.fish,
                            name: "سمكه",
                            voice: null
                        },
                        {
                            image: images.fly,
                            name: "ذبابه",
                            voice: null
                        },
                        {
                            image: images.frog,
                            name: "ضفدعه",
                            voice: null
                        },
                        {
                            image: images.giraffe,
                            name: "زرافه",
                            voice: null
                        },
                        {
                            image: images.horse,
                            name: "حصان",
                            voice: require("../../assets/Records/ES_HorseNeigh4.mp3")
                        },
                        {
                            image: images.lion,
                            name: "اسد",
                            voice: require("../../assets/Records/ES_LionCubRoar.mp3")
                        },
                        {
                            image: images.lizard,
                            name: "حربايه",
                            voice: null
                        },
                        {
                            image: images.monkey,
                            name: "قرد",
                            voice: require("../../assets/Records/ES_MonkeyColobus5.mp3")
                        },
                        {
                            image: images.mosquito,
                            name: "ناموسه",
                            voice: null
                        },
                        {
                            image: images.rabbit,
                            name: "ارنب",
                            voice: null
                        },
                        {
                            image: images.rooster,
                            name: "ديك",
                            voice: require("../../assets/Records/ES_BirdRoosterBawk1.mp3")
                        },
                        {
                            image: images.sheep,
                            name: "خروف",
                            voice: require("../../assets/Records/ES_SheepBaa1.mp3")
                        },
                        {
                            image: images.snake,
                            name: "ثعبان",
                            voice: require("../../assets/Records/ES_SnakeHiss.mp3")
                        },
                        {
                            image: images.sparrow,
                            name: "عصفوره",
                            voice: null
                        },
                        {
                            image: images.spider,
                            name: "عنكبوت",
                            voice: null
                        },
                        {
                            image: images.tigger,
                            name: "نمر",
                            voice: require("../../assets/Records/ES_TigerRoars.mp3")
                        },
                        {
                            image: images.turtle,
                            name: "سلحفاء",
                            voice: null
                        },
                        {
                            image: images.worm,
                            name: "دوده",
                            voice: null
                        },



                    ]
                },

                {
                    image: images.organs,
                    lable: " اجزاء الجسم",
                    id: 6,
                    All_catogary_arr: [
                        {
                            image: images.arm,
                            name: "ذراع",
                            voice: null

                        },
                        {
                            image: images.brain,
                            name: "المح",
                            voice: null

                        },
                        {
                            image: images.ear,
                            name: "الاذن",
                            voice: null

                        },
                        {
                            image: images.eye,
                            name: "العين",
                            voice: null

                        },
                        {
                            image: images.foot,
                            name: "القدم",
                            voice: null

                        },
                        {
                            image: images.hair,
                            name: "الشعر",
                            voice: null

                        },
                        {
                            image: images.hand,
                            name: "اليد ",
                            voice: null

                        },
                        {
                            image: images.heart,
                            name: "القلب",
                            voice: null

                        },
                        {
                            image: images.leg,
                            name: "الساق",
                            voice: null

                        },
                        {
                            image: images.mouse,
                            name: "فم",
                            voice: null

                        },
                        {
                            image: images.nails,
                            name: "الاظافر",
                            voice: null

                        },
                        {
                            image: images.neck,
                            name: "الرقبة",
                            voice: null

                        },
                        {
                            image: images.nose,
                            name: "الانف ",
                            voice: null

                        },
                        {
                            image: images.teeth,
                            name: "الاسنان",
                            voice: null

                        },
                        {
                            image: images.tongue,
                            name: "اللسان",
                            voice: null

                        },



                    ]
                },
                {
                    image: images.clothes,
                    lable: "الملابس",
                    id: 7,
                    All_catogary_arr: [
                        {
                            image: images.backpack,
                            name: "حقيبه ظهر",
                            voice: null

                        },
                        {
                            image: images.bag,
                            name: "حقيبه",
                            voice: null

                        },
                        {
                            image: images.belt,
                            name: "حزام",
                            voice: null

                        },
                        {
                            image: images.blouse,
                            name: "بلوزه",
                            voice: null

                        },
                        {
                            image: images.boot,
                            name: "حذاء طويل",
                            voice: null

                        },
                        {
                            image: images.cap,
                            name: "كاب",
                            voice: null

                        },
                        {
                            image: images.coat,
                            name: "معطف",
                            voice: null

                        },
                        {
                            image: images.derss,
                            name: "فستان",
                            voice: null

                        },
                        {
                            image: images.glaves,
                            name: "قفاذات",
                            voice: null

                        },
                        {
                            image: images.hat,
                            name: "قبعه",
                            voice: null

                        },
                        {
                            image: images.jabe,
                            name: "جيبه",
                            voice: null

                        },
                        {
                            image: images.jacket,
                            name: "جاكيت",
                            voice: null

                        },
                        {
                            image: images.jeans,
                            name: "بنطلون جينز",
                            voice: null

                        },
                        {
                            image: images.necktie,
                            name: "كارفات",
                            voice: null

                        },
                        {
                            image: images.pants,
                            name: "بنطلون قماش",
                            voice: null

                        },
                        {
                            image: images.purse,
                            name: "محفظه",
                            voice: null

                        },
                        {
                            image: images.scarf,
                            name: "شال",
                            voice: null

                        },
                        {
                            image: images.shirt,
                            name: "تيشيرت",
                            voice: null

                        },
                        {
                            image: images.shoes,
                            name: "حذاء",
                            voice: null

                        },
                        {
                            image: images.shorts,
                            name: "شورت",
                            voice: null

                        },
                        {
                            image: images.skirt,
                            name: "جيبه",
                            voice: null

                        },
                        {
                            image: images.sneaker,
                            name: "كوتشي",
                            voice: null

                        },
                        {
                            image: images.socks,
                            name: "شربات",
                            voice: null

                        },
                        {
                            image: images.sunglasses,
                            name: "نظاره شمس",
                            voice: null

                        },
                        {
                            image: images.sweater,
                            name: "بلوفر",
                            voice: null

                        },
                        {
                            image: images.winter_hat,
                            name: "قبعه شتويه",
                            voice: null

                        },



                    ]
                },
                {
                    image: images.electronic,
                    lable: "اجهزه كهربائيه",
                    id: 8,
                    All_catogary_arr: [
                        {
                            image: images.blender,
                            name: "خلاط",
                            voice: require("../../assets/Records/ES_Blender4.mp3")
                        },
                        {
                            image: images.coffe_machine,
                            name: "مكنه قهوه",
                            voice: require("../../assets/Records/ES_CoffeeMakerFill2.mp3")
                        },
                        {
                            image: images.computer,
                            name: "كومبيوتر",
                            voice: require("../../assets/Records/ES_ComputerTurnOn.mp3")
                        },
                        {
                            image: images.dish_washer,
                            name: "غساله اطباق",
                            voice: require("../../assets/Records/ES_DishwasherIn2.mp3")
                        },
                        {
                            image: images.electric_oven,
                            name: "فرن كهربائي",
                            voice: require("../../assets/Records/ES_MicrowaveOven.mp3")
                        },
                        {
                            image: images.electric_racket,
                            name: "مضرب كهربائي",
                            voice: require("../../assets/Records/ES_BlenderWithhippedCream9.mp3")
                        },
                        {
                            image: images.fan,
                            name: "مروحه",
                            voice: require("../../assets/Records/ES_FanBladeBy1.mp3")
                        },
                        {
                            image: images.hand_blander,
                            name: "مضرب يد",
                            voice: require("../../assets/Records/ES_BlenderBlendn.mp3")
                        },
                        {
                            image: images.mkuh,
                            name: "مكوه",
                            voice: require("../../assets/Records/ES_IronDoorMovement2.mp3")
                        },
                        {
                            image: images.refrigerator,
                            name: "ثلاجه",
                            voice: require("../../assets/Records/ES_Refrigerator1.mp3")
                        },
                        {
                            image: images.search_light,
                            name: "كشاف",
                            voice: require("../../assets/Records/ES_Search LightOn4.mp3")
                        },
                        {
                            image: images.sewing_machine,
                            name: "مكنه الخياطه",
                            voice: require("../../assets/Records/ES_SewingMachine4.mp3")
                        },
                        {
                            image: images.telephone,
                            name: "تليفون",
                            voice: require("../../assets/Records/ES_TelephoneRing5.mp3")
                        },
                        {
                            image: images.tv,
                            name: "تلفاز",
                            voice: require("../../assets/Records/ES_TVTurnOn.mp3")
                        },
                        {
                            image: images.washing_machine,
                            name: "غساله ملابس",
                            voice: require("../../assets/Records/ES_WashingMachine3.mp3")
                        },


                    ]
                },
                {
                    image: images.public_marfak,
                    lable: "المرافق العامه",
                    id: 9,
                    All_catogary_arr: [
                        {
                            image: images.air_plan,
                            name: "طائره",
                            voice: null
                        },
                        {
                            image: images.ambulance,
                            name: "عربه الاسعاف",
                            voice: null
                        },
                        {
                            image: images.bakery_shop,
                            name: "مخبز",
                            voice: null

                        },
                        {
                            image: images.balon,
                            name: "بالون",
                            voice: null

                        },
                        {
                            image: images.bank,
                            name: "بنك",
                            voice: null

                        },
                        {
                            image: images.beach,
                            name: "شط",
                            voice: null

                        },
                        {
                            image: images.bicycle,
                            name: "دراجه",
                            voice: null

                        },
                        {
                            image: images.bus,
                            name: "اتوبيس",
                            voice: null

                        },
                        {
                            image: images.cinema,
                            name: "سينيما",
                            voice: null

                        },
                        {
                            image: images.factory,
                            name: "مصنع",
                            voice: null

                        },
                        {
                            image: images.farm,
                            name: "مزرعه",
                            voice: null

                        },
                        {
                            image: images.flight,
                            name: "طائره هوليكوبيتر",
                            voice: null
                        },
                        {
                            image: images.games,
                            name: " ملاهي اطفال",
                            voice: null

                        },
                        {
                            image: images.gas_station,
                            name: "محطه ابنزين",
                            voice: null

                        },
                        {
                            image: images.grand_mosque,
                            name: " الحرم المكي",
                            voice: null

                        },
                        {
                            image: images.hospital,
                            name: "مستشفي",
                            voice: null

                        },
                        {
                            image: images.house,
                            name: "منزل",
                            voice: null

                        },
                        {
                            image: images.kite,
                            name: "طائره ورقيه",
                            voice: null

                        },
                        {
                            image: images.metro,
                            name: "قطار",
                            voice: null
                        },
                        {
                            image: images.metro_stasion,
                            name: "محطه الميترو ",
                            voice: null

                        },
                        {
                            image: images.mosque,
                            name: "مسجد",
                            voice: null

                        },
                        {
                            image: images.park,
                            name: "حديقه ",
                            voice: null

                        },
                        {
                            image: images.police_station,
                            name: "قسم الشرطه",
                            voice: null

                        },
                        {
                            image: images.pool,
                            name: "حمام سباحه",
                            voice: null

                        },
                        {
                            image: images.posta,
                            name: "البريد",
                            voice: null

                        },
                        {
                            image: images.restaurant,
                            name: "مطعم",
                            voice: null

                        },
                        {
                            image: images.school,
                            name: "مدرسه",
                            voice: null

                        },
                        {
                            image: images.ship,
                            name: "سفينه",
                            voice: null

                        },
                        {
                            image: images.stadium,
                            name: "استاد",
                            voice: null

                        },
                        {
                            image: images.taxie,
                            name: "تاكسي",
                            voice: null

                        },
                        {
                            image: images.track,
                            name: "شاحنه كبيره",
                            voice: null

                        },
                        {
                            image: images.tractor,
                            name: "شاحنه صغيره",
                            voice: null
                        },
                        {
                            image: images.traffic_light,
                            name: "اشاره المرور",
                            voice: null
                        },
                        {
                            image: images.zoo,
                            name: "حديقه الحيوان",
                            voice: null
                        },


                    ]
                },
                {
                    image: images.kitchen_tool,
                    lable: "ادوات مطبخ",
                    id: 10,
                    All_catogary_arr: [
                        {
                            image: images.asaret_orange,
                            name: "عصاره برتقال",
                            voice: null

                        },
                        {
                            image: images.baharat,
                            name: "بهارات",
                            voice: null

                        },
                        {
                            image: images.blansh,
                            name: "لوح تقطيع",
                            voice: null

                        },
                        {
                            image: images.blender_kitchen,
                            name: "خلاط",
                            voice: null

                        },
                        {
                            image: images.cooker,
                            name: "بتجاز",
                            voice: null

                        },
                        {
                            image: images.cookingpots,
                            name: "انيه طهي ",
                            voice: null
                        },
                        {
                            image: images.coups,
                            name: "كوبيات",
                            voice: null

                        },
                        {
                            image: images.cup,
                            name: "فنجان",
                            voice: null

                        },
                        {
                            image: images.dish,
                            name: "طبق",
                            voice: null

                        },
                        {
                            image: images.electric_racket,
                            name: "مضرب كهربائي",
                            voice: null

                        },
                        {
                            image: images.fire_gun,
                            name: "مسدس نار",
                            voice: null

                        },
                        {
                            image: images.fork,
                            name: "شوكه",
                            voice: null

                        },
                        {
                            image: images.garbage_basket,
                            name: "سله قمامه",
                            voice: null

                        },
                        {
                            image: images.goblet,
                            name: "طاسه",
                            voice: null

                        },
                        {
                            image: images.kanaba,
                            name: "كانبه",
                            voice: null

                        },
                        {
                            image: images.kettel,
                            name: "براد",
                            voice: null

                        },
                        {
                            image: images.knif,
                            name: "سكينه",
                            voice: null

                        },
                        {
                            image: images.lathe,
                            name: "مخرطه",
                            voice: null

                        },
                        {
                            image: images.limoin,
                            name: " عصاره ليمون",
                            voice: null

                        },
                        {
                            image: images.liquidator,
                            name: "مصفي",
                            voice: null

                        },
                        {
                            image: images.mage,
                            name: "مج",
                            voice: null

                        },
                        {
                            image: images.missionary,
                            name: "مبشره",
                            voice: null

                        },
                        {
                            image: images.normal_racket,
                            name: "مضرب يدوي",
                            voice: null

                        },
                        {
                            image: images.potato_masher,
                            name: "هراسه",
                            voice: null

                        },
                        {
                            image: images.refrigerator_electronic,
                            name: "ثلاجه",
                            voice: null

                        },
                        {
                            image: images.scale,
                            name: "ميزان",
                            voice: null

                        },
                        {
                            image: images.scissors,
                            name: "مقص",
                            voice: null

                        },
                        {
                            image: images.shafake,
                            name: "دورق",
                            voice: null

                        },
                        {
                            image: images.silicon_brash,
                            name: "فرشه سيليكون",
                            voice: null

                        },
                        {
                            image: images.suspended,
                            name: "معلقه",
                            voice: null

                        },
                        {
                            image: images.water_tap,
                            name: "صنبور مياه",
                            voice: null

                        },
                        {
                            image: images.silicon_suspended,
                            name: "معلقه سيليكون",
                            voice: null

                        },

                    ]
                },
                {
                    image: images.natural,
                    lable: "الظواهر الطبيعيه",
                    id: 11,
                    All_catogary_arr: [
                        {
                            image: images.autumn,
                            name: "خريف",
                            voice: require("../../assets/Records/ES_AutumnFieldInEngland.mp3")
                        },
                        {
                            image: images.borkan,
                            name: "بركان",
                            voice: require("../../assets/Records/ES_VolcanoActivity.mp3")
                        },

                        {
                            image: images.cold,
                            name: "بارد",
                            voice: require("../../assets/Records/ES_WindBlizzard2.mp3")
                        },
                        {
                            image: images.falls,
                            name: "شلالات",
                            voice: require("../../assets/Records/ES_WeirWaterBarrier.mp3")
                        },
                        {
                            image: images.flood,
                            name: "فيضان",
                            voice: require("../../assets/Records/ES_WaterSloshBucket4.mp3")
                        },

                        {
                            image: images.lightning,
                            name: "برق",
                            voice: require("../../assets/Records/ES_RainLight4.mp3")
                        },
                        {
                            image: images.rain,
                            name: "مطر",
                            voice: require("../../assets/Records/ES_WindBlizzard2.mp3")
                        },

                        {
                            image: images.sun,
                            name: "شمس",
                            voice: require("../../assets/Records/ES_SunriseJungle.mp3")
                        },

                        {
                            image: images.thunder,
                            name: "رعد",
                            voice: require("../../assets/Records/ES_ThunderstormRain2.mp3")
                        },
                        {
                            image: images.tornado,
                            name: "اعصار",
                            voice: require("../../assets/Records/ES_WindStorm7.mp3")
                        },



                    ]
                },
                {
                    image: images.action,
                    lable: " الافعال",
                    id: 12,
                    All_catogary_arr: [
                        {
                            image: images.arrange,
                            name: "ترتيب السرير",
                            voice: null

                        },
                        {
                            image: images.bathing,
                            name: "الاستحمام",
                            voice: null

                        },
                        {
                            image: images.bike_riding,
                            name: "ركوب الدرجات",
                            voice: null

                        },
                        {
                            image: images.bursh,
                            name: "غسل الاسنان",
                            voice: null

                        },
                        {
                            image: images.cooking,
                            name: "طهي",
                            voice: null

                        },
                        {
                            image: images.cries,
                            name: "بكاء",
                            voice: null

                        },
                        {
                            image: images.drinking,
                            name: "يشرب",
                            voice: null

                        },
                        {
                            image: images.eating,
                            name: "ياكل",
                            voice: null

                        },
                        {
                            image: images.playing,
                            name: "يلعب",
                            voice: null

                        },
                        {
                            image: images.pray,
                            name: "يصلي",
                            voice: null

                        },
                        {
                            image: images.running,
                            name: "يجري",
                            voice: null


                        },
                        {
                            image: images.shouting,
                            name: "يصرخ",
                            voice: null

                        },
                        {
                            image: images.singing,
                            name: "يغني",
                            voice: null

                        },
                        {
                            image: images.skipping_rope,
                            name: "نط الحبل",
                            voice: null

                        },
                        {
                            image: images.sleep,
                            name: "ينام",
                            voice: null


                        },
                        {
                            image: images.studing,
                            name: "يدرس",
                            voice: null

                        },
                        {
                            image: images.throwing_junk,
                            name: "يلقي القمامه",
                            voice: null

                        },
                        {
                            image: images.wake_up,
                            name: "يستسقظ",
                            voice: null

                        },
                        {
                            image: images.walking,
                            name: "يمشي",
                            voice: null

                        },
                        {
                            image: images.watcing_tv,
                            name: "مشاهده التلفاز",
                            voice: null

                        },
                        {
                            image: images.wearing,
                            name: "يرتدي",
                            voice: null

                        },
                        {
                            image: images.writting,
                            name: "يكتب",
                            voice: null

                        },


                    ]
                },




            ]
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <View
                    style={{
                        height: 60,
                        width: '100%',
                        backgroundColor: '#242c78',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',

                    }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                        تعلم
                    </Text>
                </View>
                <FlatList data={this.state.Catogaries_arr}
                    renderItem={({ item, index }) => (
                        <Animatable.View
                            style={{
                                height: 200,
                                width: "45%",
                                backgroundColor: '#fff',
                                elevation: 7, margin: 10,
                                borderRadius: 10,
                            }}

                            duration={1000} animation="bounceIn" delay={index * 200}>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("All_catogary", {
                                        All_catogary_arr: item.All_catogary_arr,

                                    })

                                }}

                                style={{

                                    alignItems: "center",

                                }}>
                                <Image source={item.image}
                                    style={{ height: 150, width: "100%", resizeMode: "center" }} />
                                <Text style={{ color: '#000', fontSize: 20, }}>
                                    {item.lable}
                                </Text>

                            </TouchableOpacity>


                        </Animatable.View>
                    )}

                    numColumns={2}


                />



            </View>
        )
    }
}