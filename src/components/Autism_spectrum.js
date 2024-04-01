import React from 'react';
import { View, Text, StatusBar, ScrollView, Image } from 'react-native';

export default class Diagnosis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disease_name: this.props.navigation.getParam('disease_name'),
            disease_image: this.props.navigation.getParam('disease_image'),
        };
    }

    render() {
        return (
            <>

                <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                    <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#242c78',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
                            التشخيص
                        </Text>
                    </View>

                    <ScrollView>
                        <View style={{
                            backgroundColor: "#fff",
                            height: 120,
                            width: '95%',
                            elevation: 4,
                            marginVertical: 15,
                            alignSelf: "center",
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: 'center',
                            padding: 10

                        }}>
                            <Image source={this.state.disease_image} style={{ height: 90, width: 120, resizeMode: "cover", borderRadius: 10 }} />
                            <View>
                                <Text style={{ color: '#ac1313', fontWeight: 'bold', fontSize: 18 }}>
                                    {' '}
                                    المرض هو
                                </Text>

                                <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>
                                    {'           '}

                                    {this.state.disease_name}
                                </Text>
                            </View>


                        </View>
                        {/* 
                        <View style={{
                            padding: 10,
                            elevation: 4,
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "95%",
                            alignSelf: "center",
                            // marginVertical: 10
                        }}>
                            <View
                                style={{
                                    // backgroundColor: '#585',
                                    // height:50,
                                    padding: 10,
                                    width: '97%',
                                    alignSelf: 'center',
                                }}>
                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    تشخيص الوهن العصبي:

                                </Text>
                                <Text style={{ color: '#000', fontSize: 15 }}>

                                    {this.state.treatment}
                                </Text>
                            </View>
                        </View> */}

                        <View style={{
                            padding: 15,
                            alignSelf: "center",
                            width: "95%",
                            backgroundColor: "#fff",
                            elevation: 4,
                            marginVertical: 10,
                            borderRadius: 10
                        }}>
                            <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                كيفية التعامل مع  طيف التوحد للاطفال

                            </Text>

                            <Text style={{ color: "#000" }}>

                                أولًا بالناحية الإيجابية في كيفية التعامل مع طفل التوحد التي تساعد طفل اضطرابات التوحد على تحقيق تطور إيجابي.
                            </Text>
                            <Text style={{ color: "#000" }}>
                                قبل البدء في مساعدة طفلك عليك فهم ودراسة حالته. تعلّم الكثير عن العوامل الطبية والسلوكية والنفسية التي تؤثر عليه وعلى نموه وتطور مهاراته وحالته. اقرأ كثيرًا عن اضطراب التوحد، واستكشف أحدث ما توصلت إليه الأبحاث عن طيف التوحد. اصنع خطًا ساخنًا بينك وبين طبيبه لتناقش معه وتستشيره في كل صغيرة وكبيرة عن حالة طفلك. باختصار كن مثقفًا وملمًا بحالة طفلك.
                            </Text>
                            <Text style={{ color: "#000" }}>
                                •	شجع طفل التوحد على التواصل وتكوين صداقات
                            </Text>
                            <Text style={{ color: "#000" }}>
                                غالبا ما يسبب التوحد وجود مشكلات اجتماعية تتعلق بالتواصل والتفاعل مع الخير، وكما قلنا من قبل تلاحظ أنّ الطفل لا يهتم بمن حوله ولا يكترث لوجودهم من الأساس، ويكون رد فعله تجاه الود من المحيطين به هو الصمت.
                            </Text>
                            <Text style={{ color: "#000" }}>
                                ولكن المفاجأة أنّ معظم الأطفال المصابين بالتوحد يريدون تكوين صداقات بشدة وهذا عكس ما نتوقعه
                                يؤكد الباحثون في هذا المجال أنّ الأطفال المصابين بالتوحد لديهم القدرة على تكوين صداقات وهم يفعلون ذلك بالفعل، فهم يختارون في بعض الأحيان أصدقاء بنفس حالتهم أي أصدقاء يعانون التوحد مثلهم، وفي أحيان أخرى يفضلون تكوين صداقات مع أشخاص بالغين أو أطفال عاديين. وسيساعدك في تحديد ذلك كولي أمر هو فهمك العميق لطفلك وما يفضله لتقرر في هذا الأمر.

                            </Text>






                        </View>
                        <View style={{
                            backgroundColor: "#fff",
                            elevation: 4,
                            padding: 15,
                            width: '95%',
                            alignSelf: "center",
                            borderRadius: 10,
                            marginVertical: 10
                        }}>
                            <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                العلاج
                            </Text>

                            <Text style={{ color: "#000" }}>
                                لذلك فعليك كولي أمر:
                            </Text>



                            <Text style={{ color: "#000" }}>
                                أن تضع هذا في الاعتبار، ادعُ أطفالًا من نفس حالة طفلك لحفلة عيد ميلاده مثلًا أو لموعد للعب، اتركه يتفاعل ويتحدث معهم عند رؤيتهم، اتفق معهم على عمل نشاط مشترك بينهم، كالتنزه في حديقة أو زيارة مكان يفضلونه جميعًا دون تجاهل رغبة أحدهم.
                            </Text>


                            <Text style={{ color: "#000" }}>
                                •	تحدث عن اهتمامات طفلك
                            </Text>


                            <Text style={{ color: "#000" }}>
                                الاهتمام المبالغ فيه والنفور المبالغ فيه أحد أعراض التوحد الأساسية؛ فمن الممكن أن ينبهر طفلك بكل شيء تقريبًا إذا رأي رقم – علبة – صورة – لون، أو أي شيء آخر.
                            </Text>


                            <Text style={{ color: "#000" }}>
                                •	اعرف اهتمامات طفلك التي تشعره بالسعادة وحدثه عنها؛ لأنّ هذا سوف يشعره بالارتياح، فمثلًا إذا كان طفلك يشعر بالفرحة عند رؤية السيارات الصغيرة الملونة ويظهر اهتمامًا كلما رآها، عليك أن تتحدث معه عنها وتشاركه في اهتمامه بها؛ لكي يتواصل معك طفلك ويشعر بالارتياح الذي يشجعه على الحديث معك دون مجهود منك لتشجيعه على ذلك.
                            </Text>

                            <Text style={{ color: "#000" }}>
                                وما ينبغي عليك في هذه الحالة هو ترك طفلك يتحدث عن اهتماماته وشاركه في الحديث دون توقف ولا تحاول تغيير موضوع الحديث أبدًا
                            </Text>


                            <Text style={{ color: "#000" }}>
                                •	تقبل طفلك كما هو
                            </Text>


                            <Text style={{ color: "#000" }}>
                                بعض الأطفال يبدون طبيعيين وتتطور مهاراتهم بشكل طبيعي حتى بلوغه السنة الثانية من عمره، وبعدها يلاحظ الآباء حالة فقدان لكل ما اكتسبوه من مهارات فجأة، وهو بالطبع أمر محزن للغاية لا يمكن إنكار هذا، فهم يرون طفلهم يتقدم وينمو أمام أعينهم ثم فجأة يتوقف كل شيء، بل يتراجع.
                            </Text>


                            <Text style={{ color: "#000" }}>
                                رغم كل هذا بالطبع ومن دون شك لن تتغير مشاعر أم أو أب تجاه طفله لهذا السبب، لكن ما يصيب الآباء في هذه الحالة هو الإحباط الذي يمكن وصفه بالحزن الممزوج بالفقد والخسارة. ما نود التركيز عليه هنا هو ضرورة تعامل الآباء مع ذلك بطريقة إيجابية تساعد طفلهم، فعليهم تقبل طفلهم والبحث عما يجعلهم يستمتعون بحياتهم معه في حالته الجديدة ويتقبلونه كما هو
                            </Text>


                            <Text style={{ color: "#000" }}>
                                •	تواصل مع إباء أطفال توحد اخرين
                            </Text>


                            <Text style={{ color: "#000" }}>
                                كما قلنا من قبل عليك خلق مجتمع لطفلك به أناس يرتاح في تعامله معهم وتكوين صداقات يفضلها مع أطفال توحد آخرين، أنت أيضًا تفاعل مع آبائهم فمثلما أنت بحاجة إلى دعمهم والاستفادة من خبراتهم، فهناك الكثير منهم من ينتظر دعمك ومساعدتك لاجتياز مراحل قد نجحت أنت في اجتيازها.
                            </Text>

                            <Text style={{ color: "#000" }}>
                                •	كوّن معهم مجموعات تستطيعون من خلالها مساعدة بعضكم البعض، يمكنكم مساعدة بعضكم البعض عن طريق الاعتناء المتبادل بأطفالكم؛ لتتيحوا لبعضكم الفرصة للخروج وقضاء وقت ترتاحون فيه من المسئوليات. أو يمكنكم الاستماع لبعضكم البعض وتقديم النصح والخبرات بهدف المساعدة.
                            </Text>



                        </View>

                    </ScrollView>
                </View>






                {/* <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                    <ScrollView>
                        <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
                        <View
                            style={{
                                height: 60,
                                width: '100%',
                                backgroundColor: '#242c78',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
                                التشخيص
                            </Text>
                        </View>

                        <View
                            style={{
                                // backgroundColor: '#474',
                                alignSelf: 'center',
                                marginVertical: 10,
                                // height: 300,
                                // padding:10,
                                width: '90%',
                                borderRadius: 10,
                                borderColor: '#242c78',
                                borderWidth: 2,
                            }}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    height: 125,
                                    width: '100%',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#242c78',
                                    // backgroundColor: '#474',
                                    flexDirection: "row"
                                }}>
                                <View>
                                    <Text style={{ color: '#ac1313', fontWeight: 'bold', fontSize: 18 }}>
                                        {' '}
                                        المرض هو
                                    </Text>

                                    <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>
                                        {'           '}

                                        {this.state.disease_name}
                                    </Text>
                                </View>
                                <View>
                                    <Image source={this.state.disease_image} style={{ height: 90, width: 120, resizeMode: "cover", borderRadius: 10 }} />
                                </View>


                            </View>

                            <View
                                style={{
                                    // backgroundColor: '#585',
                                    // height:50,
                                    padding: 10,
                                    width: '97%',
                                    alignSelf: 'center',
                                }}>
                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    كيفية التعامل مع الشخصية النرجسية:

                                </Text>

                                <Text style={{ color: "#000" }}>

                                    حدد نوع النرجسي الذي تتعامل معه
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    اعترف بانزعاجك
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    طمأنهم قليلا
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    لا تنخدع بالظاهر
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    تجاهلهم دائما
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    خذ موقف
                                    ضع حدودًا واضحة
                                    اثبت على موقفك
                                </Text>

                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    العلاج
                                </Text>

                                <Text style={{ color: "#000" }}>
                                    يعتمد علاج اضطراب الشخصية النرجسية على العلاج بالمحادثة، والمعروف أيضًا باسم العلاج النفسي
                                </Text>
                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    الأدوية
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    لا توجد أدوية محددة مستخدمة لعلاج اضطراب الشخصية النرجسية. ومع ذلك، إذا كنت تعاني أعراض الاكتئاب أو القلق أو غيرها من الحالات، يمكن لأدوية مضادات الاكتئاب أو مضادات القلق أن تكون مفيدة
                                </Text>








                            </View>
                        </View>
                    </ScrollView>
                </View> */}
            </>
        );
    }
}
