import React from "react";
// internal
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <React.Fragment>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="General Questions"
                    />
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Shri Yantra
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "Q. What is Shri Yantra?",
                        show: true,
                        desc: "A. Shri Yantra is a sacred geometrical diagram used in Hinduism and other spiritual practices for meditation and spiritual transformation. It is believed to bring spiritual growth, protection and abundance. ",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: "Q. How is the Shri Yantra used?",
                        desc: "A. The Shri Yantra is used for meditation and spiritual transformation. It is believed to help one open up to divine energies and awaken spiritual power within. ",
                      },
                      {
                        id: "Three",
                        title: "Q. What are the benefits of using the Shri Yantra?",
                        desc: "A. The Shri Yantra is believed to bring spiritual growth, protection and abundance. It is thought to help one access higher levels of consciousness, bring clarity to the mind and help one manifest desires.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "four",
                        title: " Q. Is there a special ritual or technique to use the Shri Yantra?",
                        desc: "A. Yes, there are special rituals and techniques associated with the use of the Shri Yantra. It is best to seek advice from an experienced practitioner when using the Shri Yantra to ensure proper use and maximum benefits.",
                      },
                    ],
                  },
                  {
                    title: (
                      <>
                        Maha Kuber Yantra
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "Q. What is the Maha Kuber Yantra?",
                        show: true,
                        desc: "A. The Maha Kuber Yantra is an ancient Hindu talisman featuring an image of Kuber, the god of wealth and prosperity. It is believed to bring luck, fortune, and good health to its owner. ",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "Q. How do I use the Maha Kuber Yantra?",
                        desc: "A. The Maha Kuber Yantra should be placed in the northeast corner of your home or workplace. It should be worshipped daily with offerings of incense, flowers, and fruits. Meditation on the yantra can also be beneficial. ",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "Q. What are the benefits of the Maha Kuber Yantra?",
                        desc: "A. The Maha Kuber Yantra is said to bring good luck, fortune, and wealth to its owner. It can also help bring success in business and attract positive energy into your life. ",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "eight",
                        title: "Q. Is the Maha Kuber Yantra safe?",
                        desc: "A. Yes, the Maha Kuber Yantra is completely safe to use. It is not associated with any harmful practices or rituals.",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  {
                    title: "Saraswati Yantra",
                    accordions: [
                      {
                        id: "nine",
                        title: "Q: What is Saraswati Yantra?",
                        show: true,
                        desc: "A: Saraswati Yantra is a powerful Hindu talisman or sacred diagram used to invoke the blessings of the Hindu goddess Saraswati, who is the goddess of knowledge, music, and the arts. It is believed that the presence of the yantra in a home, office, or temple helps to bring knowledge, wisdom, and creative energy. ",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title:
                          "Q: How is Saraswati Yantra used?",
                        desc: "A: Saraswati Yantra is used in meditation, prayer, and ritual to invoke the blessings of the goddess Saraswati. It is also used to gain knowledge, wisdom, and creativity.",
                        parent: "general-3_accordion",
                      },
                      // {
                      //   id: "ten",
                      //   title: "Why is my tracking number not updating?",
                      //   desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                      //   parent: "general-3_accordion",
                      // },
                    ],
                  },
                ]}
              />

              {/* community */}
              <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "eleven",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "twelve",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "thirteen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "fourteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "community-1_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* support */}
              <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "fifteen",
                        title: "Can I cancel my account at any time?",
                        show: true,
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "sixteen",
                        title: "What happens after the license expires?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "seventeen",
                        title: "Does Harry have any documentations?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "eighteen",
                        title: "How long do I get support & updates?",
                        desc: "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders",
                        parent: "support-1_accordion",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </React.Fragment>
  );
};

export default FaqArea;
