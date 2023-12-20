import { useCallback } from "react";
import styles from "./LandingPage1.module.css";

const LandingPage1 = () => {
  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onWorkProcessTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onWorkProcessText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='maskGroup']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onContactsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonsAutoLayoutOnFilClick = useCallback(() => {
    window.open("https://twitter.com/?lang=en");
  }, []);

  const onButtonsAutoLayoutOnFil1Click = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onButtonsAutoLayoutOnFil2Click = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onWorkProcessText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onWorkProcessText3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onServicesText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='maskGroup']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onContactsText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className={styles.landingPage1}>
      <img
        className={styles.landingPage1Child}
        alt=""
        src="/group-139@2x.png"
      />
      <div className={styles.landingPage1Item} />
      <div className={styles.landingPage1Inner} />
      <div className={styles.createScreensDirec}>
        Have a question? Check out our frequently asked questions to find your
        answer.
      </div>
      <div className={styles.frequentlyAskedQuestions}>
        Frequently asked questions
      </div>
      <div className={styles.groupParent} data-scroll-to="groupContainer2">
        <img className={styles.groupChild} alt="" src="/group-111@2x.png" />
        <img className={styles.groupItem} alt="" src="/group-97@2x.png" />
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.buildingBetterWorkContainer}>
                  <p className={styles.canBeChanged}>
                    Can be changed to customizable ready made web3 dapps
                    templates.
                  </p>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.emailMarketingParent}>
                    <div className={styles.emailMarketing}>NFT(ERC721).</div>
                    <div className={styles.emailMarketing1}>01</div>
                    <div className={styles.emailMarketing2}>02</div>
                    <div className={styles.emailMarketing3}>03</div>
                    <div className={styles.emailMarketing4}>04</div>
                    <div className={styles.emailMarketing5}>05</div>
                    <div className={styles.emailMarketing6}>DEFI</div>
                    <div className={styles.emailMarketing7}>
                      Smart Contracts
                    </div>
                    <div className={styles.emailMarketing8}>GameFi</div>
                    <div className={styles.emailMarketing9}>Metaverse</div>
                  </div>
                  <button className={styles.elementsButtonsOutlineParent}>
                    <div className={styles.groupContainer}>
                      <div className={styles.groupContainer}>
                        <div className={styles.base} />
                        <div className={styles.buttonText}>Download Now</div>
                      </div>
                    </div>
                    <div className={styles.buttonText1}>Start building</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/rectangle-45@2x.png" />
        <div className={styles.elementsWidgetsWidget04}>
          <div className={styles.groupContainer}>
            <div className={styles.base1} />
            <div className={styles.activ}>
              <div className={styles.rec} />
              <div className={styles.rec1} />
              <div className={styles.rec2} />
              <div className={styles.rec3} />
              <div className={styles.rec4} />
              <div className={styles.rec5} />
              <div className={styles.rec6} />
              <div className={styles.rec7} />
              <div className={styles.rec8} />
              <div className={styles.rec9} />
            </div>
            <img
              className={styles.elementsButtonsIcon32}
              alt=""
              src="/elements--buttons--icon--32px@2x.png"
            />
            <div className={styles.checkOutEach}>
              Check out each collumn for more details
            </div>
            <div className={styles.totalSales}>Total Sales</div>
          </div>
        </div>
        <div className={styles.elementsWidgetsWidget041}>
          <div className={styles.groupContainer}>
            <div className={styles.base2} />
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.button1}>
                <div className={styles.base3} />
                <div className={styles.buttonText2}>Read More</div>
                <img
                  className={styles.iconsFlashRounded}
                  alt=""
                  src="/icons--flash-rounded@2x.png"
                />
              </div>
            </div>
            <div className={styles.createScreensDirec1}>
              Create screens directly in Method or add your images from Sketch…
            </div>
            <div className={styles.elementsPlaceholderRadiu}>
              <div className={styles.base4} />
            </div>
            <img
              className={styles.iconsBookmark}
              alt=""
              src="/icons--bookmark@2x.png"
            />
            <div className={styles.dailyNews}>Daily News</div>
          </div>
        </div>
        <div className={styles.elementsWidgetsWidget04Parent}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.base5} />
              <div className={styles.features}>
                <div className={styles.feature1}>
                  <img
                    className={styles.iconsStats}
                    alt=""
                    src="/icons--stats@2x.png"
                  />
                  <div className={styles.taxes}>Taxes</div>
                </div>
                <div className={styles.feature2}>
                  <img
                    className={styles.iconsStatsCopy2}
                    alt=""
                    src="/icons--stats-copy-2@2x.png"
                  />
                  <div className={styles.totalSales1}>Total Sales</div>
                </div>
                <div className={styles.feature3}>
                  <img
                    className={styles.iconsStats}
                    alt=""
                    src="/icons--stats-copy@2x.png"
                  />
                  <div className={styles.taxes}>Transactions</div>
                </div>
                <div className={styles.feature4}>
                  <img
                    className={styles.iconsStatsCopy3}
                    alt=""
                    src="/icons--stats-copy-3@2x.png"
                  />
                  <div className={styles.profit}>Profit</div>
                </div>
              </div>
              <div className={styles.elementsPlaceholderRadiu1}>
                <div className={styles.base6} />
              </div>
              <img
                className={styles.elementsButtonsIcon32}
                alt=""
                src="/elements--buttons--icon--32px@2x.png"
              />
              <div className={styles.checkOutEach1}>
                Check out each collumn for more details
              </div>
              <div className={styles.dailyNews}>Activity</div>
            </div>
          </div>
          <div className={styles.base7} />
        </div>
        <div className={styles.elementsWidgetsWidget04Group}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.base5} />
              <div className={styles.features}>
                <div className={styles.feature1}>
                  <img
                    className={styles.iconsStats}
                    alt=""
                    src="/icons--stats@2x.png"
                  />
                  <div className={styles.taxes}>Taxes</div>
                </div>
                <div className={styles.feature2}>
                  <img
                    className={styles.iconsStatsCopy2}
                    alt=""
                    src="/icons--stats-copy-2@2x.png"
                  />
                  <div className={styles.totalSales1}>Total Sales</div>
                </div>
                <div className={styles.feature3}>
                  <img
                    className={styles.iconsStats}
                    alt=""
                    src="/icons--stats-copy@2x.png"
                  />
                  <div className={styles.taxes}>Transactions</div>
                </div>
                <div className={styles.feature4}>
                  <img
                    className={styles.iconsStatsCopy3}
                    alt=""
                    src="/icons--stats-copy-3@2x.png"
                  />
                  <div className={styles.profit}>Profit</div>
                </div>
              </div>
              <div className={styles.elementsPlaceholderRadiu1}>
                <div className={styles.base6} />
              </div>
              <img
                className={styles.elementsButtonsIcon32}
                alt=""
                src="/elements--buttons--icon--32px@2x.png"
              />
              <div className={styles.checkOutEach1}>
                Check out each collumn for more details
              </div>
              <div className={styles.dailyNews}>Activity</div>
            </div>
          </div>
          <div className={styles.base10} />
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-52@2x.png"
        />
        <img className={styles.groupChild1} alt="" src="/rectangle-53@2x.png" />
        <img className={styles.groupChild2} alt="" src="/rectangle-54@2x.png" />
        <div className={styles.baseParent}>
          <div className={styles.base11} />
          <div className={styles.iconColorParent}>
            <img
              className={styles.iconColor}
              alt=""
              src="/-icon-color@2x.png"
            />
            <div className={styles.buttonText3}>Read More</div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <div className={styles.background1} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <div className={styles.ourBlog}>Our blog</div>
        <div className={styles.groupParent1}>
          <div className={styles.groupParent2}>
            <div className={styles.baseGroup}>
              <div className={styles.base12} />
              <div className={styles.article}>
                <div className={styles.text}>
                  <div className={styles.theDesignSide}>
                    The Design Side Of Conversion Rate Optimization
                  </div>
                </div>
                <div className={styles.tagText}>
                  <div className={styles.marketing}>Marketing</div>
                  <div className={styles.tagTextChild} />
                  <div className={styles.minRead}>9 min read</div>
                </div>
                <div className={styles.elementsPlaceholderRadiu3}>
                  <div className={styles.base13} />
                </div>
              </div>
              <img className={styles.baseIcon} alt="" src="/base@2x.png" />
            </div>
            <div className={styles.baseContainer}>
              <div className={styles.base14} />
              <div className={styles.article1}>
                <div className={styles.text}>
                  <div className={styles.analyticsFeaturesToContainer}>
                    <p
                      className={styles.canBeChanged}
                    >{`Analytics Features `}</p>
                    <p
                      className={styles.canBeChanged}
                    >{`to Improve User Experience      `}</p>
                  </div>
                </div>
                <div className={styles.tagText}>
                  <div className={styles.design}>Design</div>
                  <div className={styles.tagTextChild} />
                  <div className={styles.minRead}>6 min read</div>
                </div>
                <div className={styles.elementsPlaceholderRadiu3}>
                  <div className={styles.base13} />
                </div>
              </div>
              <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
            </div>
            <a className={styles.groupA}>
              <div className={styles.base14} />
              <div className={styles.article2}>
                <div className={styles.text2}>
                  <div className={styles.creativeWaysTo}>
                    6 Creative Ways to Use Repeat Grids in Adobe XD
                  </div>
                  <div className={styles.createScreensDirectlyContainer}>
                    <p className={styles.canBeChanged}>
                      Create screens directly in Method or
                    </p>
                    <p
                      className={styles.canBeChanged}
                    >{`add your imagesfrom Sketch or Figma. `}</p>
                  </div>
                </div>
                <div className={styles.tagText}>
                  <div className={styles.product}>Product</div>
                  <div className={styles.tagTextChild} />
                  <div className={styles.minRead2}>10 min read</div>
                </div>
                <div className={styles.elementsPlaceholderRadiu5}>
                  <div className={styles.base13} />
                </div>
              </div>
              <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
            </a>
            <div className={styles.baseParent1}>
              <div className={styles.base12} />
              <div className={styles.article}>
                <div className={styles.text}>
                  <div className={styles.creativeWaysTo}>
                    The Design Side Of Conversion Rate Optimization
                  </div>
                  <div className={styles.createScreensDirectlyContainer1}>
                    <p className={styles.canBeChanged}>
                      Create screens directly in Method or
                    </p>
                    <p
                      className={styles.canBeChanged}
                    >{`add your imagesfrom Sketch or Figma. `}</p>
                  </div>
                </div>
                <div className={styles.tagText}>
                  <div className={styles.marketing}>Marketing</div>
                  <div className={styles.tagTextChild} />
                  <div className={styles.minRead}>9 min read</div>
                </div>
                <div className={styles.elementsPlaceholderRadiu3}>
                  <div className={styles.base13} />
                </div>
              </div>
              <img className={styles.baseIcon3} alt="" src="/base@2x.png" />
            </div>
          </div>
          <div className={styles.createScreensDirectlyContainer2}>
            <p className={styles.canBeChanged}>
              Create screens directly in Method or
            </p>
            <p
              className={styles.canBeChanged}
            >{`add your imagesfrom Sketch or Figma. `}</p>
          </div>
          <div className={styles.createScreensDirectlyContainer3}>
            <p className={styles.canBeChanged}>
              Create screens directly in Method or
            </p>
            <p
              className={styles.canBeChanged}
            >{`add your imagesfrom Sketch or Figma. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <img className={styles.icon} alt="" src="/30-1@2x.png" />
        <img className={styles.icon1} alt="" src="/27-1@2x.png" />
        <div
          className={styles.wrapperGroup87Parent}
          data-scroll-to="groupContainer3"
        >
          <div className={styles.wrapperGroup87}>
            <img
              className={styles.wrapperGroup87Child}
              alt=""
              src="/group-87@2x.png"
            />
          </div>
          <div
            className={styles.elementsButtonsPlay02Parent}
            data-scroll-to="groupContainer4"
          >
            <button className={styles.elementsButtonsPlay02}>
              <img
                className={styles.iconsStats}
                alt=""
                src="/play-button@2x.png"
              />
            </button>
            <div className={styles.createScreensDirecParent}>
              <div className={styles.createScreensDirec2}>
                Unlock the blockchain potential to create Web3 Applications
              </div>
              <div className={styles.welcomeToTheContainer}>
                <span>Web</span>
                <span className={styles.makr}>3Makr</span>
                <span> Redefining How You Create</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperMockup}>
          <img className={styles.mockupIcon} alt="" src="/mockup@2x.png" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon1}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.menu}>
                <div className={styles.about} onClick={onAboutTextClick}>
                  Web3Makr
                </div>
                <div
                  className={styles.workProcess}
                  onClick={onWorkProcessTextClick}
                >
                  Services
                </div>
                <div
                  className={styles.workProcess1}
                  onClick={onWorkProcessText1Click}
                >
                  White paper
                </div>
                <div className={styles.services} onClick={onServicesTextClick}>
                  Tool
                </div>
                <div className={styles.contacts} onClick={onContactsTextClick}>
                  Contact us
                </div>
              </div>
            </div>
            <button className={styles.frameButton}>
              <button className={styles.buttonTextParent}>
                <div className={styles.buttonText4}>Start for free</div>
                <div className={styles.elementsButtonsOutline1}>
                  <div className={styles.groupContainer}>
                    <div className={styles.base20} />
                    <div className={styles.buttonText5}>Download Now</div>
                  </div>
                </div>
              </button>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.baseParent2}>
          <div className={styles.base21} />
          <div className={styles.groupWrapper1}>
            <div className={styles.baseParent3}>
              <div className={styles.base22} />
              <div className={styles.progress} />
            </div>
          </div>
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.whatPeopleAreSayiParent}>
            <div className={styles.whatPeopleAre}>What People Are Saying</div>
            <div className={styles.testimonials}>Testimonials</div>
            <div className={styles.youCanEven}>
              Multi chain interoperability
            </div>
          </div>
          <img className={styles.icon2} alt="" src="/50-1@2x.png" />
          <div className={styles.imageParent}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.web3makrProvidesAContainer}>
              <p className={styles.canBeChanged}>
                “Web3makr provides a solution for web3 developers and beginners
                by integrating the drag and drop feature for properties like NFT
                Search Marketplace, Wallet Integration, downloadable source
                code, and Smart Contract. Aside from this, the software also
                provides its users with ready-made and customizable templates
                that users can use when creating their web3 applications.”
              </p>
              <p className={styles.canBeChanged}>&nbsp;</p>
              <p className={styles.canBeChanged}>- Sophie Adderiy</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPage1Child1} />
      <img
        className={styles.maskGroupIcon2}
        alt=""
        src="/mask-group@2x.png"
        data-scroll-to="maskGroup"
      />
      <div className={styles.parent}>
        <button className={styles.button3}>
          <img
            className={styles.iconsRemove}
            alt=""
            src="/-icons--remove@2x.png"
          />
          <div className={styles.createScreensDirecContainer}>
            <p className={styles.canBeChanged}>
              Web3makr provides a solution for web3 developers and beginners by
              integrating the drag and drop feature for properties like NFT
              Search Marketplace, Wallet Integration, downloadable source code,
              and Smart Contract. Aside from this, the software also provides
              its users with ready-made and customizable templates that users
              can use when creating their web3 applications.
            </p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
            <p className={styles.canBeChanged}></p>
          </div>
          <div className={styles.whyShouldI}>Why should I use Web3Mkr?</div>
          <div className={styles.divider} />
        </button>
        <button className={styles.button4}>
          <img className={styles.iconsPlus} alt="" src="/-icons--plus@2x.png" />
          <div className={styles.divider1} />
          <div className={styles.whatIsWeb3makr}>
            What is Web3Makr and what does it do?
          </div>
          <div className={styles.divider} />
        </button>
        <button className={styles.button5}>
          <img
            className={styles.iconsPlus1}
            alt=""
            src="/-icons--plus@2x.png"
          />
          <div className={styles.divider3} />
          <div className={styles.whatIsWeb3makr1}>
            What is Web3Makr and what does it do?
          </div>
          <div className={styles.divider} />
        </button>
      </div>
      <div className={styles.groupParent5} data-scroll-to="groupContainer1">
        <div className={styles.groupParent6}>
          <img className={styles.groupIcon} alt="" src="/group-111@2x.png" />
          <img className={styles.groupChild3} alt="" src="/group-88@2x.png" />
          <div className={styles.groupWrapper2}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.youCanEven1}>
                  Most entrepreneurs want to create their own web3 sites,
                  unfortunately, they dont know much about creating one.
                  Web3Makr makes it easier for newbies to create a
                  blockchain-based collectibles solution without the hassle of
                  leaving their favorite creation tools and by simple drag and
                  drop functionality.
                </div>
                <div className={styles.buildingBetterWorkContainer1}>
                  <p className={styles.canBeChanged}>Create</p>
                  <p
                    className={styles.canBeChanged}
                  >{`your own Web3 Masterpiece `}</p>
                </div>
                <button className={styles.elementsButtonsOutlineGroup}>
                  <div className={styles.groupContainer}>
                    <div className={styles.groupContainer}>
                      <div className={styles.base} />
                      <div className={styles.buttonText}>Download Now</div>
                    </div>
                  </div>
                  <div className={styles.buttonText1}>Start building</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupChild4} alt="" src="/rectangle-51@2x.png" />
        <div className={styles.groupChild5} />
        <img className={styles.groupChild6} alt="" src="/rectangle-63@2x.png" />
        <img className={styles.groupChild7} alt="" src="/rectangle-66@2x.png" />
        <img className={styles.groupChild8} alt="" src="/rectangle-67@2x.png" />
        <img className={styles.groupChild9} alt="" src="/rectangle-68@2x.png" />
        <img
          className={styles.groupChild10}
          alt=""
          src="/rectangle-69@2x.png"
        />
        <div className={styles.groupChild11} />
        <div className={styles.groupChild12} />
      </div>
      <div className={styles.wrapperGroup88}>
        <img
          className={styles.wrapperGroup88Child}
          alt=""
          src="/group-88@2x.png"
        />
      </div>
      <div className={styles.groupParent7} data-scroll-to="groupContainer">
        <div className={styles.createScreensDirecGroup}>
          <div className={styles.createScreensDirec3}>
            No credit card required.
          </div>
          <div className={styles.frequentlyAskedQuestions1}>
            Start a free trial today
          </div>
          <button className={styles.elementsButtonsOutlineContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.base} />
                <div className={styles.buttonText}>Download Now</div>
              </div>
            </div>
            <div className={styles.buttonText1}>Start for free</div>
          </button>
        </div>
        <div className={styles.wrapperGroup146}>
          <img
            className={styles.wrapperGroup146Child}
            alt=""
            src="/group-146@2x.png"
          />
        </div>
      </div>
      <div className={styles.frequentlyAskedQuestions2}>Metaverse</div>
      <div className={styles.copyright2021Parent}>
        <div className={styles.copyright2021}>Copyright 2022 © Web3makr</div>
        <div className={styles.social}>
          <div
            className={styles.buttonsAutoLayoutOnFil}
            onClick={onButtonsAutoLayoutOnFilClick}
          >
            <img
              className={styles.iconssocialstwitter}
              alt=""
              src="/iconssocialstwitter@2x.png"
            />
          </div>
          <div
            className={styles.buttonsAutoLayoutOnFil1}
            onClick={onButtonsAutoLayoutOnFil1Click}
          >
            <img
              className={styles.iconssocialstwitter}
              alt=""
              src="/iconssocialsinstagram@2x.png"
            />
          </div>
          <div
            className={styles.buttonsAutoLayoutOnFil2}
            onClick={onButtonsAutoLayoutOnFil2Click}
          >
            <img
              className={styles.iconssocialstwitter}
              alt=""
              src="/iconssocialsfacebook@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupParent8}>
          <img className={styles.groupChild13} alt="" src="/group-114@2x.png" />
          <div className={styles.menu1}>
            <div className={styles.about} onClick={onAboutText1Click}>
              Web3Makr
            </div>
            <div
              className={styles.workProcess}
              onClick={onWorkProcessText2Click}
            >
              Services
            </div>
            <div
              className={styles.workProcess1}
              onClick={onWorkProcessText3Click}
            >
              White paper
            </div>
            <div className={styles.services} onClick={onServicesText1Click}>
              Tool
            </div>
            <div className={styles.contacts} onClick={onContactsText1Click}>
              Contact us
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <img
        className={styles.landingPage1Child2}
        alt=""
        src="/group-151@2x.png"
      />
      <img
        className={styles.landingPage1Child3}
        alt=""
        src="/group-156@2x.png"
      />
      <img
        className={styles.landingPage1Child4}
        alt=""
        src="/group-155@2x.png"
      />
      <img
        className={styles.landingPage1Child5}
        alt=""
        src="/group-153@2x.png"
      />
      <img
        className={styles.landingPage1Child6}
        alt=""
        src="/group-152@2x.png"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild14} />
        <img className={styles.aaveLogoIcon} alt="" src="/aavelogo@2x.png" />
      </div>
      <img
        className={styles.landingPage1Child7}
        alt=""
        src="/group-154@2x.png"
      />
    </div>
  );
};

export default LandingPage1;
