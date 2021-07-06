<template>
    <div id="works">
        <div id="pano" style="width: 100%; height: 100%">
            <noscript>
                <table style="width: 100%; height: 100%">
                    <tr style="vertical-align: middle">
                        <td>
                            <div style="text-align: center">
                                ERROR:<br /><br />Javascript not activated<br /><br />
                            </div>
                        </td>
                    </tr>
                </table>
            </noscript>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "최고가 아닌 <span>유일</span>이</br > 되려고 합니다.",
            works: [
                {
                    name: "LOOK360",
                    desc: "LOOK360 포털입니다.(등의 소개 및 설명)",
                },
                {
                    name: "CAMPUSTOWN",
                    desc: "CAMPUSTOWN 사이트입니다.(등의 소개 및 설명)",
                },
                {
                    name: "SK8SPOT",
                    desc: "SK8SPOT 사이트입니다.(등의 소개 및 설명)",
                },
            ],
        };
    },
    methods: {
        onloadTour() {
            embedpano({
                swf: "vtour/tour.swf",
                xml: "vtour/tour.xml",
                target: "pano",
                html5: "auto",
                id: "vr",
                mobilescale: 1.0,
                passQueryParameters: true,
                // onready: onKrpanoReady,
                // onerror: onKrpanoError,
            });
        },
    },
    mounted() {
        let exScript = document.createElement("script");
        exScript.setAttribute("src", "vtour/tour.js");
        // exScript.setAttribute("src", "../../public/vtour/tour.js");
        document.head.appendChild(exScript);

        exScript.onload = this.onloadTour;
    },
};
</script>

<style lang="scss">
#works {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: pink;

    .container {
        .workSlide {
            height: calc(100vh - 10px - 85px - 300px);
            max-height: 550px;
            min-height: 200px;

            #look {
                background-image: url("../assets/look360page.jpg");
            }
            #campus {
                background-image: url("../assets/campuspage.jpg");
            }
            #skate {
                background-image: url("../assets/sk8spotpage.jpg");
            }
            .hooper-slide {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                cursor: pointer;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;

                .glass {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    transition: 1s all;
                    opacity: 0;
                }
                .motion-rise {
                    transform: translateY(0);
                    opacity: 1;
                }
                h2 {
                    margin-bottom: 16px;
                    background: #fff;
                    padding: 12px 18px;
                    border-radius: 8px;
                    transform: translateY(60%);
                    transition: 1s all;
                    transition-delay: 0.8s;
                    opacity: 0;
                    box-shadow: 2px 2px 4px #ccc;
                    z-index: 10;
                }
                p {
                    background: #fff;
                    padding: 12px 18px;
                    color: #2b2b2b;
                    border-radius: 8px;
                    transform: translateY(60%);
                    transition: 1s all;
                    transition-delay: 0.8s;
                    opacity: 0;
                    box-shadow: 2px 2px 4px #ccc;
                    z-index: 10;
                }
            }
            .hooper-slide.is-active {
                .glass {
                    opacity: 0.6;
                }
                h2 {
                    transform: translateY(0);
                    opacity: 1;
                }
                p {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
    }
}
</style>