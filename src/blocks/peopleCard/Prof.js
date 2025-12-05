import React from 'react';
import DownloadButton from '../../components/button/DownloadButton';
import LinkButton from '../../components/button/LinkButton';
const Prof = ({ ProfData }) => {
    return (
        <section id="page-content" className="spacer">
            <div className="peoplecard">
                <div className="wrapper">
                    <div className="prof_cardwrapper">
                        {ProfData.map((item) => {
                            return (
                                <div className="img_div">
                                    <img className="prof_img" src={process.env.PUBLIC_URL + `/assets/img/people/` + item.img} alt={item.title} />
                                    <div className="info_div">
                                        <h4>{item.title}</h4>
                                        <p className='p'> I'm a postdoctoral researcher at <a href='https://mac.kaist.ac.kr/'>Music and Audio Computing Lab</a>, advised by <a href="https://mac.kaist.ac.kr/~juhan/">Prof. Juhan Nam</a>. <br />
                                            My research focuses on developing music intelligence for understanding, retrieval, generation, and post-production tasks. This work is structured around three interconnected research directions. First, I investigate <b>representation learning</b> methods that establish semantic correspondences between music and complementary modalities including natural language, visual content, and other media formats. Second, I explore <b>multi-modal large language models</b> (MLLMs) for music applications, with a focus on three key subtopics: reasoning, chain-of-thought processes, and tool calling, leveraging the intermediate generation capabilities of language models. Third, I develop <b>conversational interfaces</b> for music applications, focusing on user experience and practical value in real-world scenarios.
                                        </p>

                                        <div className="btn_div">
                                            <DownloadButton
                                                keyword="cv"
                                                link={process.env.PUBLIC_URL + `/assets/cv/CV_seungheon.pdf`}
                                                position=""
                                                textcolor="has-white-color"
                                                backgroundcolor="has-olive-background-color"
                                            />
                                            {Object.keys(item.material).map((key_name, index) => {
                                                return (
                                                    <LinkButton
                                                        keyword={key_name}
                                                        link={item.material[key_name]}
                                                        position="inline"
                                                        textcolor="has-white-color"
                                                        backgroundcolor="has-gray-dark-background-color"
                                                    />
                                                );
                                            })
                                            }

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <p className='p' style={{ textAlign: 'center', marginTop: '30px', marginBottom: '5px' }}> <b>🔥 Plan to enter the job market at 2026 March! 🔥</b></p>
                </div>
            </div>
        </section>
    );
};

export default Prof;
