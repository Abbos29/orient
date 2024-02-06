import React from 'react'
import './Services.scss'

const Services = () => {
    return (
        <section className="services">
            <div className="about__inner">
                <h2 className="section-title">
                    УСЛУГИ КОМПАНИИ

                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3333 25.3334H24C23.6463 25.3334 23.3072 25.4738 23.0571 25.7239C22.8071 25.9739 22.6666 26.3131 22.6666 26.6667C22.6666 27.0203 22.8071 27.3595 23.0571 27.6095C23.3072 27.8596 23.6463 28 24 28H28V30.6667H24C23.6463 30.6667 23.3072 30.8072 23.0571 31.0572C22.8071 31.3073 22.6666 31.6464 22.6666 32V37.3334C22.6666 37.687 22.8071 38.0261 23.0571 38.2762C23.3072 38.5262 23.6463 38.6667 24 38.6667H29.3333C29.6869 38.6667 30.0261 38.5262 30.2761 38.2762C30.5262 38.0261 30.6666 37.687 30.6666 37.3334C30.6666 36.9798 30.5262 36.6406 30.2761 36.3906C30.0261 36.1405 29.6869 36 29.3333 36H25.3333V33.3334H29.3333C29.6869 33.3334 30.0261 33.1929 30.2761 32.9428C30.5262 32.6928 30.6666 32.3537 30.6666 32V26.6667C30.6666 26.3131 30.5262 25.9739 30.2761 25.7239C30.0261 25.4738 29.6869 25.3334 29.3333 25.3334Z" fill="#C5A376" />
                        <path d="M38.6667 26.6667V30.6667H36V26.6667C36 26.3131 35.8596 25.9739 35.6095 25.7239C35.3595 25.4738 35.0203 25.3334 34.6667 25.3334C34.3131 25.3334 33.9739 25.4738 33.7239 25.7239C33.4738 25.9739 33.3334 26.3131 33.3334 26.6667V32C33.3334 32.3537 33.4738 32.6928 33.7239 32.9428C33.9739 33.1929 34.3131 33.3334 34.6667 33.3334H38.6667V37.3334C38.6667 37.687 38.8072 38.0261 39.0572 38.2762C39.3073 38.5262 39.6464 38.6667 40 38.6667C40.3537 38.6667 40.6928 38.5262 40.9428 38.2762C41.1929 38.0261 41.3334 37.687 41.3334 37.3334V26.6667C41.3334 26.3131 41.1929 25.9739 40.9428 25.7239C40.6928 25.4738 40.3537 25.3334 40 25.3334C39.6464 25.3334 39.3073 25.4738 39.0572 25.7239C38.8072 25.9739 38.6667 26.3131 38.6667 26.6667Z" fill="#C5A376" />
                        <path d="M32 13.3334C28.3081 13.3334 24.6991 14.4282 21.6294 16.4793C18.5597 18.5304 16.1671 21.4457 14.7543 24.8566C13.3415 28.2675 12.9718 32.0207 13.6921 35.6417C14.4123 39.2627 16.1901 42.5888 18.8007 45.1994C21.4113 47.8099 24.7374 49.5878 28.3584 50.308C31.9793 51.0283 35.7326 50.6586 39.1435 49.2458C42.5544 47.833 45.4697 45.4404 47.5208 42.3707C49.5719 39.301 50.6667 35.692 50.6667 32C50.6667 27.0493 48.7001 22.3014 45.1994 18.8007C41.6987 15.3 36.9508 13.3334 32 13.3334ZM32 48C28.8355 48 25.7421 47.0616 23.1109 45.3035C20.4797 43.5454 18.429 41.0466 17.218 38.123C16.007 35.1994 15.6901 31.9823 16.3075 28.8786C16.9248 25.7749 18.4487 22.924 20.6863 20.6863C22.924 18.4487 25.7749 16.9248 28.8786 16.3075C31.9823 15.6901 35.1994 16.007 38.123 17.218C41.0466 18.429 43.5455 20.4797 45.3036 23.1109C47.0617 25.7421 48 28.8355 48 32C48 36.2435 46.3143 40.3132 43.3138 43.3137C40.3132 46.3143 36.2435 48 32 48Z" fill="#C5A376" />
                        <path d="M61.0933 26.16C58.76 25.4933 56.56 25.1733 55.3733 22.28C54.1867 19.3867 55.68 17.4 56.7067 15.5467C57.1246 14.7826 57.2817 13.903 57.1542 13.0414C57.0266 12.1799 56.6214 11.3836 56 10.7733L53.2267 8C52.6117 7.38507 51.813 6.98733 50.9517 6.86703C50.0904 6.74674 49.2133 6.91044 48.4533 7.33334L46.5867 8.37334C45.8439 8.78538 45.0176 9.02432 44.1695 9.07231C43.3214 9.1203 42.4734 8.97611 41.6889 8.65049C40.9043 8.32487 40.2034 7.82625 39.6386 7.19183C39.0737 6.55742 38.6594 5.80361 38.4267 4.98667L37.84 2.94667C37.6092 2.10121 37.1072 1.35494 36.411 0.822569C35.7148 0.290202 34.8631 0.00120627 33.9867 3.9996e-06H29.9867C29.1155 -0.00122759 28.2677 0.282001 27.5722 0.806642C26.8767 1.33128 26.3715 2.06865 26.1333 2.90667C25.52 5.05334 25.1733 7.41334 22.28 8.61334C19.3867 9.81334 17.3467 8.30667 15.52 7.28C14.7575 6.87021 13.8825 6.71887 13.0266 6.84869C12.1707 6.97852 11.3801 7.38251 10.7733 8L8 10.7733C7.38293 11.3867 6.98269 12.1846 6.85998 13.046C6.73727 13.9074 6.89877 14.7853 7.32 15.5467L8.36 17.4133C8.77221 18.1553 9.01165 18.9807 9.06048 19.828C9.1093 20.6754 8.96625 21.5228 8.642 22.3072C8.31774 23.0915 7.82063 23.7926 7.18773 24.3581C6.55482 24.9237 5.80245 25.339 4.98667 25.5733L2.93334 26.16C2.09035 26.3932 1.34705 26.8964 0.817266 27.5923C0.287477 28.2883 0.000402419 29.1387 3.99961e-06 30.0133V34.0133C-0.00122759 34.8845 0.282001 35.7323 0.806642 36.4278C1.33128 37.1233 2.06865 37.6285 2.90667 37.8667C5.22667 38.52 7.44 38.8533 8.62667 41.7467C9.81334 44.64 8.33334 46.6267 7.29334 48.48C6.88189 49.2412 6.72836 50.1152 6.85577 50.9711C6.98318 51.8269 7.38467 52.6183 8 53.2267L10.7733 56C11.3867 56.6171 12.1846 57.0173 13.046 57.14C13.9074 57.2627 14.7853 57.1012 15.5467 56.68L17.44 55.6267C18.18 55.2194 19.0021 54.9835 19.8456 54.9365C20.689 54.8894 21.5322 55.0325 22.3129 55.355C23.0937 55.6776 23.792 56.1713 24.3563 56.7999C24.9206 57.4285 25.3365 58.1758 25.5733 58.9867L26.16 61.0667C26.3932 61.9096 26.8964 62.6529 27.5923 63.1827C28.2883 63.7125 29.1387 63.9996 30.0133 64H34.0133C34.8845 64.0012 35.7323 63.718 36.4278 63.1934C37.1233 62.6687 37.6285 61.9314 37.8667 61.0933C38.52 58.7733 38.8533 56.56 41.7467 55.3733C44.64 54.1867 46.6 55.6667 48.48 56.7067C49.2412 57.1181 50.1152 57.2716 50.9711 57.1442C51.8269 57.0168 52.6184 56.6153 53.2267 56L56 53.2267C56.6149 52.6117 57.0127 51.813 57.133 50.9517C57.2533 50.0903 57.0896 49.2133 56.6667 48.4533L55.6133 46.56C55.2084 45.8213 54.974 45.0014 54.9275 44.1603C54.8809 43.3192 55.0234 42.4783 55.3444 41.6995C55.6654 40.9207 56.1567 40.2236 56.7824 39.6596C57.4081 39.0955 58.1522 38.6788 58.96 38.44L61.0667 37.84C61.9096 37.6068 62.653 37.1036 63.1827 36.4077C63.7125 35.7117 63.9996 34.8613 64 33.9867V29.9867C63.9954 29.12 63.7096 28.2783 63.1853 27.5882C62.6611 26.8981 61.927 26.3969 61.0933 26.16ZM61.3333 33.9867C61.3333 35.1467 60.48 35.24 58.2667 35.8667C57.0696 36.2149 55.9663 36.8281 55.0385 37.6608C54.1108 38.4935 53.3823 39.5244 52.9072 40.6769C52.4321 41.8295 52.2225 43.0742 52.2939 44.3189C52.3654 45.5635 52.7161 46.776 53.32 47.8667C54.3733 49.76 55 50.5333 54.1467 51.3467C51.2933 54.2 50.8667 55.0133 49.7467 54.3867C47.4667 53.0533 44.7333 51.2533 40.64 52.9467C34.4667 55.4933 36.64 61.3467 33.9733 61.3467C28.44 61.3467 29.16 61.9467 28.12 58.2933C27.6151 56.5624 26.5625 55.0419 25.12 53.96C23.6775 52.8781 21.9231 52.2933 20.12 52.2933C17.6667 52.2933 16.2933 53.24 14.2267 54.3867C13.1067 55 12.68 54.2 9.82667 51.3467C8.94667 50.4667 9.66667 49.6533 10.6533 47.8667C11.2571 46.7752 11.6073 45.5617 11.6779 44.3164C11.7485 43.071 11.5378 41.8257 11.0613 40.673C10.5848 39.5202 9.85486 38.4896 8.92557 37.6575C7.99628 36.8254 6.89154 36.2134 5.69334 35.8667C3.68 35.28 2.66667 35.2133 2.66667 33.9867C2.66667 29.8533 2.41334 29.08 3.64 28.7333C6.30667 27.96 9.42667 27.3333 11.08 23.3333C12.7333 19.3333 10.9867 16.6667 9.62667 14.2533C9.01334 13.1333 9.81334 12.6933 12.6667 9.85334C13.52 9 14.2667 9.64 16.1067 10.6667C17.2 11.2651 18.4137 11.6106 19.6583 11.6778C20.9029 11.7451 22.1468 11.5322 23.2982 11.055C24.4496 10.5778 25.4794 9.84837 26.3116 8.92045C27.1437 7.99253 27.7572 6.88975 28.1067 5.69334C28.76 3.52 28.8 2.66667 30.0133 2.66667C34.0933 2.66667 34.92 2.41334 35.2667 3.64C35.9867 6.13334 36.6 9.4 40.6667 11.08C46.88 13.6533 49.48 8 51.3333 9.85334C55.2133 13.72 55.1733 12.8133 53.32 16.1467C52.7161 17.2373 52.3654 18.4499 52.2939 19.6945C52.2225 20.9391 52.4321 22.1838 52.9072 23.3364C53.3823 24.489 54.1108 25.5198 55.0385 26.3525C55.9663 27.1852 57.0696 27.7984 58.2667 28.1467C61.9467 29.1733 61.3333 28.5067 61.3333 33.9867Z" fill="#C5A376" />
                    </svg>
                </h2>
            </div>

            <p className="services__pretitle">Краткое описание услуг, которая предоставляет наша компания</p>

            <div className="container-max">

                <div className="services__wrapper wrap-1">
                    <div className="services__item">
                        <img src="./services-1.svg" alt="icon" />
                    </div>
                    <div className="services__item">
                        <img src="./services-2.png" alt="icon" />
                    </div>
                </div>

                <div className="services__wrapper wrap-2">
                    <div className="services__item">
                        <img src="./services-3.svg" alt="icon" />
                    </div>
                    <div className="services__item">
                        <img src="./services-4.svg" alt="icon" />
                    </div>
                </div>

                <div className="services__wrapper wrap-3">
                    <div className="services__item">
                        <img src="./services-5.svg" alt="icon" />
                    </div>
                    <div className="services__item">
                        <img src="./services-6.svg" alt="icon" />
                    </div>
                    <div className="services__item">
                        <img src="./services-7.png" alt="icon" />
                    </div>
                </div>

                <div className="services__wrapper wrap-4">
                    <div className="services__item">
                        <img src="./services-8.svg" alt="icon" />
                    </div>
                    <div className="services__item">
                        <img src="./services-9.svg" alt="icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services