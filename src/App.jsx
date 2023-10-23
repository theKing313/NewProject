import './styles/App.scss';
import Header from './Components/Header/Header';
import styles from './Components/About.module.scss';

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
// ...


function App() {
  const [menuActive, setMenuActive] = useState(true)
  return (
    <div className="wrapper bg-[#110A1D]">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <main className='sm:mt-64 mt-[8.875rem]'>
        <div className="container m-auto px-[1.0625rem] ">
          <div className="flex flex-col sm:flex-row  justify-between relative">

            <div className="sm:flex-[0_1_20%] self-center mb-5">
              <div className={styles.title}>
                HOUSE OF <span>GAMBLING</span>
              </div>
              <div className={styles.label}>
                Raise your ROI with direct advertiser
              </div>
              <button className={styles.button}>Become a Partner</button>
            </div>
            <div className="sm:flex-[0_1_30%] flex gap-x-4 flex-col sm:flex-row h-28">
              <div className={styles.itemImage1}></div>
              <div className={styles.itemImage2}></div>
              <div className={styles.itemImage3}></div>
            </div>
            <div className="sm:flex-[0_1_40%] w-full">
              <div className={styles.blogTitle}>BLOG</div>
              <div className={styles.content}>
                <OverlayScrollbarsComponent height={'30%'} defer>
                  <div className={styles.contentItem}>
                    <div className={styles.label}>Payment methods: Skrill, Neteller, webmoney, Bank transfer
                      10.02.2023</div>
                    <div className={styles.date}>
                      10.02.2023
                    </div>
                  </div>
                  <div className={styles.contentItem}>
                    <div className={styles.label}>Payment methods: Skrill, Neteller, webmoney, Bank transfer
                      10.02.2023</div>
                    <div className={styles.date}>
                      10.02.2023
                    </div>
                  </div>
                  <div className={styles.contentItem}>
                    <div className={styles.label}>Payment methods: Skrill, Neteller, webmoney, Bank transfer
                      10.02.2023</div>
                    <div className={styles.date}>
                      10.02.2023
                    </div>
                  </div>
                  <div className={styles.contentItem}>
                    <div className={styles.label}>Payment methods: Skrill, Neteller, webmoney, Bank transfer
                      10.02.2023</div>
                    <div className={styles.date}>
                      10.02.2023
                    </div>
                  </div>
                  <div className={styles.contentItem}>
                    <div className={styles.label}>Payment methods: Skrill, Neteller, webmoney, Bank transfer
                      10.02.2023</div>
                    <div className={styles.date}>
                      10.02.2023
                    </div>
                  </div>
                </OverlayScrollbarsComponent>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
