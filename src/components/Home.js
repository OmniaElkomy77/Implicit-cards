import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ToastAndroid, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { images } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diseases: [
        {
          disease_title: 'الاحساس بآلام عصبيه',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'التنميل في بعض مناطق الجسم',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الضعف العام ',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'القلق والاكتئاب',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الدوار والاغماء',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عدم انتظام ضربات القلب',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'مشكلات التركيز',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'مشكلات في التنفس',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'صعوبات في الحفاظ على رباطة جأش الفرد وثباته',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تسارع في ضربات القلب.',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },

        {
          disease_title: 'اضطرابات في الكلام.',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'التعرق بلا سبب واضح',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'ارهاق جسدي ونفسي',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'سيلان شديد للعاب',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تشنجات في الجسم',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تصلب في العضلات أو ثقل في الأطراف',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الضغط الشديد على الأسنان',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تصلب في عضلات الرقبة',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'احمرار في العينين',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عنف وصراخ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 1,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الم ورطوبه في الاطراف',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تسارع الانفاس',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الصداع',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الارق',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'فقدان الشهيه',
          narcissim: 0,
          neurasthenia: 1,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title:
            'الوحدة وقلة الأصدقاء المقربين خارج نطاق العائلة المقربين',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 1,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title:
            'تبلد المشاعر أو محدودة أو عدم مناسبة الاستجابات العاطفية',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 1,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'القلق الاجتماعي المستمر والمفرط',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 1,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الخوف من الاتساخ أو التلوث',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'تصورات غير عادية',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 1,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },

        {
          disease_title: 'الخوف من الإصابة بالأمراض',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الخوف من التسبب بالضرر لنفسه وللآخرين',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title:
            'الخوف من الإحراج أو من الفشل والتورط بسلوك غير لائق على الملأ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الخوف من الأخطاء',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 1,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },

        {
          disease_title: 'جنون العظمه ',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الشعور المبالغ ب اهميه الذات ',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الشعور بالاستحقاق',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الحط من قدر الاخرين ',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'استغلال الاخارين دون خجل او تانيب ضمير ',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الحاجه للثناء ',
          narcissim: 1,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عدم الجلوس في نفس المكان كثيرا ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الكلام والضجيج ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'السلوك المشوش غير الواضح',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'اضاعة الاشياء بشكل مستمر ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عدم المبالاة ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'المشاكسة ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عدم التناسق الحركي ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'كثرة التجول',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'عدم استقرار الشخص في مكانه',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'قصور الإنتباه ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'الاندفاعية ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'سلوك فرط النشاط الحركي ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 1,
          autism_spectrum: 0,
          check: 0,
        },
        {
          disease_title: 'قلة الاتصال بالعين ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },
        {
          disease_title: 'عدم الاستجابة للبالغين',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },

        {
          disease_title: 'عدم الاكتراث لمقدمي الرعاية',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: ' الانطوائيه',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'فقدان المهارات اللغويه',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },

        {
          disease_title: 'صعوبة في التعلم',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },

        {
          disease_title: 'أقل من الذكاء المعتاد',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },
        {
          disease_title: 'مشاكل في التفاعل الاجتماعي ومهارات التواصل',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'عدم استجابة الطفل عند مناداته باسمه أو يبدو كأنه لا يسمعك في بعض الأوقات',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'يرفض العناق والإمساك به',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },

        {
          disease_title: 'يفضل اللعب بمفرده؛ أي ينسحب إلى عالمه الخاص',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'ضعف التواصل البصري، وغياب تعبيرات الوجه',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'عدم الكلام أو التأخر في الكلام، ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'عدم القدرة على بدء محادثة أو الاستمرار فيها ',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'يتكلم بنبرة أو إيقاع غير طبيعي',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: '	تكرار الكلمات أو العبارات الحرفية',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },


        {
          disease_title: 'صعوبة في التعرف على الإشارات غير اللفظية',
          narcissim: 0,
          neurasthenia: 0,
          hysteria: 0,
          obsessive_compulsive_disorder: 0,
          schizophrenia: 0,
          lack_of_attention: 0,
          autism_spectrum: 1,
          check: 0,
        },




















      ],
    };
  }



  componentWillUnmount() {
    let diseases = this.state.diseases;
    for (let i = 0; i < diseases.length; i++) {
      diseases[i].check = 0;
    }
    this.setState({ diseases: diseases })
    console.log(this.state.diseases[0].check)
  }


  check_Fun(index) {
    let diseases = this.state.diseases;
    for (let i = 0; i < diseases.length; i++) {
      if (i == index) {
        if (diseases[i].check == 1) {
          diseases[i].check = 0;
        } else if (diseases[i].check == 0) {
          diseases[i].check = 1;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    this.setState({ diseases: diseases });
  }

  getResult() {
    let arr = this.state.diseases,
      narcissim_score = 0,
      neurasthenia_score = 0,
      hysteria_score = 0,
      schizophrenia_score = 0,
      obsessive_compulsive_disorder_score = 0,
      lack_of_attention_score = 0;
    autism_spectrum_score = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].check == 1) {
        narcissim_score += arr[i].narcissim;
        neurasthenia_score += arr[i].neurasthenia;
        hysteria_score += arr[i].hysteria;
        obsessive_compulsive_disorder_score += arr[i].obsessive_compulsive_disorder;
        schizophrenia_score += arr[i].schizophrenia;
        lack_of_attention_score += arr[i].lack_of_attention
        autism_spectrum_score += arr[i].autism_spectrum
      }
    }
    // console.log(
    //   '**1=' +
    //     narcissim_score +
    //     '**2=' +
    //     neurasthenia_score +
    //     '**3=' +
    //     hysteria_score +
    //     '**4=' +
    //     obsessive_compulsive_disorder_score +
    //     '***5' +
    //     schizophrenia_score,
    // );
    if (
      narcissim_score == 0 &&
      neurasthenia_score == 0 &&
      hysteria_score == 0 &&
      schizophrenia_score == 0 &&
      obsessive_compulsive_disorder_score == 0 &&
      lack_of_attention_score == 0 &&
      autism_spectrum_score == 0

    ) {
      ToastAndroid.showWithGravityAndOffset(
        "يجب عليك اختيار اعراض المرض ",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        20,
        20
      );
    } else {


      if (
        narcissim_score >= neurasthenia_score &&
        narcissim_score >= hysteria_score &&
        narcissim_score >= obsessive_compulsive_disorder_score &&
        narcissim_score >= schizophrenia_score &&
        narcissim_score >= lack_of_attention_score &&
        narcissim_score >= autism_spectrum_score
      ) {

        this.props.navigation.navigate('Narcissim', {
          disease_name: 'النرجسيه',
          treatment: '',
          disease_image: images.Narcissism
        });
      } else if (
        neurasthenia_score >= narcissim_score &&
        neurasthenia_score >= hysteria_score &&
        neurasthenia_score >= obsessive_compulsive_disorder_score &&
        neurasthenia_score >= schizophrenia_score &&
        neurasthenia_score >= lack_of_attention_score &&
        neurasthenia_score >= autism_spectrum_score
      ) {
        // console.log('2');
        this.props.navigation.navigate('Diseases2', {
          disease_name: 'الوهن العصبي',
          treatment:
            'لتشخيص حاله الوهن العصبي توجد عده نظم ومعايير تختلف من جهه لاخري :\n' +
            'تزايد الارهاق والتعب الملازم للمريض بعد بذل مجهود نفسي معين .\n' +
            'ظهور واجتماع عرضين علي الاقل لدي المريض الشعور بآلام في العضلات والدوخه والارق وصداع التوتر والعجز عن الاسترخاء وعسر الهضم.\n' +
            'عدم ملازمه الاعراض الاكتئابيه ان وجدت بشكل دائم وعدم ظهورها بشكل حاد يكفي لربطها بمرض نفسي او عصبي اخر .\n',
          disease_image: images.neurasthenia
        });
      } else if (
        hysteria_score >= narcissim_score &&
        hysteria_score >= neurasthenia_score &&
        hysteria_score >= obsessive_compulsive_disorder_score &&
        hysteria_score >= schizophrenia_score &&
        hysteria_score >= lack_of_attention_score &&
        hysteria_score >= autism_spectrum_score
      ) {
        // console.log('3');
        this.props.navigation.navigate('Hysteria', {
          disease_name: 'الهستريا',

          disease_image: images.hysteria
        });
      } else if (
        obsessive_compulsive_disorder_score >= narcissim_score &&
        obsessive_compulsive_disorder_score >= neurasthenia_score &&
        obsessive_compulsive_disorder_score >= hysteria_score &&
        obsessive_compulsive_disorder_score >= schizophrenia_score &&
        obsessive_compulsive_disorder_score >= lack_of_attention_score &&
        obsessive_compulsive_disorder_score >= autism_spectrum_score
      ) {
        // console.log('4');
        this.props.navigation.navigate('Obsessive_compulsive_disorder', {
          disease_name: 'الوسواس القهري',
          treatment:

            'العلاج النفسي والذي يشمل العلاج السلوكي المعرفي (CBT) - وهو أحد أنواع العلاج النفسي\n' +
            'بعض الأدوية النفسية المساعدة في السيطرة على الهواجس والأفعال القهرية لاضطراب الوسواس القهري لكن الأكثر شيوعًا هو ادويه مضادات الاكتئاب\n',
          disease_image: images.obsessive
        });
      } else if (
        lack_of_attention_score >= narcissim_score &&
        lack_of_attention_score >= neurasthenia_score &&
        lack_of_attention_score >= schizophrenia_score &&
        lack_of_attention_score >= hysteria_score &&
        lack_of_attention_score >= obsessive_compulsive_disorder_score &&
        lack_of_attention_score >= autism_spectrum_score
      ) {

        this.props.navigation.navigate('Lack_of_attention', {
          disease_name: 'قصور الإنتباه وفرط الحركة',
          treatment: '',
          disease_image: images.lack_of_attention
        });

      } else if (

        autism_spectrum_score >= narcissim_score &&
        autism_spectrum_score >= neurasthenia_score &&
        autism_spectrum_score >= schizophrenia_score &&
        autism_spectrum_score >= hysteria_score &&
        autism_spectrum_score >= obsessive_compulsive_disorder_score &&
        autism_spectrum_score >= lack_of_attention_score

      ) {
        this.props.navigation.navigate('Autism_spectrum', {
          disease_name: "طيف التوحد ",

          disease_image: images.autism_spectrum
        });

      } else {

        this.props.navigation.navigate('Schizophrenia', {
          disease_name: 'الانفصام',
          disease_image: images.schizophrenia
        });
      }

    }

  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
        <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#242c78',
            alignItems: 'center',
            justifyContent: "space-around",
            flexDirection: "row"
          }}>
          <Text style={{
            fontSize: 18, fontWeight: '700',
            color: '#fff',
            // backgroundColor: "#474",
            marginLeft: 100
          }}>
            اعراض المرض
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              width: '30%',
              // alignSelf: 'center',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              // marginVertical: 15,
            }}
            onPress={() => {
              this.getResult();
            }}>
            <Text style={{ color: '#242c78', fontSize: 18, fontWeight: 'bold' }}>
              تم{' '}
            </Text>
          </TouchableOpacity>


        </View>
        <FlatList
          data={this.state.diseases}
          renderItem={({ item, index }) => (
            <Animatable.View duration={800} animation="lightSpeedIn" delay={index * 50}>
              <TouchableOpacity
                onPress={() => {
                  this.check_Fun(index);
                  // alert("1")
                }}
                style={{
                  padding: 10,
                  // height: 120,
                  width: '92%',
                  elevation: 4,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  marginVertical: 10,
                  borderRadius: 25,
                  borderWidth: item.check == 1 ? 1 : null,
                  borderColor: item.check == 1 ? '#32b34e' : null,
                }}>
                <View
                  style={{
                    height: 60,
                    width: 70,
                    backgroundColor: '#f0f1ff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Icon name="capsules" size={25} color="#7a80f4" />
                </View>

                <View
                  style={{
                    // height: 70,
                    width: item.check == 0 ? '75%' : '65%',
                    //   backgroundColor: '#f05',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#000', fontSize: 18 }}>
                    {item.disease_title}
                  </Text>
                </View>
                {item.check == 1 ? (
                  <Icon
                    name="check-circle"
                    style={{
                      fontSize: 25,
                      fontWeight: '500',
                      color: '#357606',
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </Animatable.View>
          )} />
        {/* <ScrollView>
          {this.state.diseases.map((item, index) => (
            <Animatable.View duration={1000} animation="lightSpeedIn" delay={index * 100}>
              <TouchableOpacity
                onPress={() => {
                  this.check_Fun(index);
                  // alert("1")
                }}
                style={{
                  padding: 10,
                  // height: 120,
                  width: '92%',
                  elevation: 4,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  marginVertical: 10,
                  borderRadius: 25,
                  borderWidth: item.check == 1 ? 1 : null,
                  borderColor: item.check == 1 ? '#32b34e' : null,
                }}>
                <View
                  style={{
                    height: 60,
                    width: 70,
                    backgroundColor: '#f0f1ff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Icon name="capsules" size={25} color="#7a80f4" />
                </View>

                <View
                  style={{
                    // height: 70,
                    width: item.check == 0 ? '75%' : '65%',
                    //   backgroundColor: '#f05',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: '#000', fontSize: 18 }}>
                    {item.disease_title}
                  </Text>
                </View>
                {item.check == 1 ? (
                  <Icon
                    name="check-circle"
                    style={{
                      fontSize: 25,
                      fontWeight: '500',
                      color: '#357606',
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </Animatable.View>
          ))}


        </ScrollView> */}
      </View>
    );
  }
}
