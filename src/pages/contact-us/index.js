import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import styles from "../../styles/Demo.module.css";
import down from "@/images/downIcon.svg";
import { useForm } from "react-hook-form";
import { State, City } from "country-state-city";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import checkedIcon from "@/images/checkedIcon.svg";
import { Layout } from "@/app/layout";
import { Icon } from "@iconify/react";
import AboutPreviewImage from "../../../public/images/about-preview.svg";
import HeadPart from "@/component/Head/head";
import Testimonail from "@/component/home/testimonial";
const Contact = () => {
  const [stateValue, setSatateValue] = useState("");
  const [ip4, setIP4] = useState({});
  const [ip6, setIP6] = useState({});
  const [location, setIPLocation] = useState({});
  const [cities, setCities] = useState([]);
  const StatesData = State.getStatesOfCountry("IN");
  const getSelectedState = StatesData.find((item) => item.name === stateValue);
  const stateCode = getSelectedState?.isoCode;
  const router = useRouter();
  const initialPayload = {
    name: "",
    email: "",
    phoneNumber: "",
    clinic: "",
    state: "",
    city: "",
    message: "",
  };
  useEffect(() => {
    const CityData = City.getCitiesOfState("IN", stateCode);
    setCities(CityData);
  }, [stateCode]);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const pageRoutes = useSelector((state) => state.pages.pageRoutes);
  useEffect(() => {
    const IPv4 = () =>
      axios.get("https://api.ipify.org?format=json").then((res) => {
        setIP4(res.data);
      });
    IPv4();
  }, []);

  useEffect(() => {
    const IPv6 = () =>
      axios.get("https://api64.ipify.org?format=json").then((res) => {
        setIP6(res.data);
      });
    IPv6();
  }, []);

  const locationIp = ip4.ip !== undefined && ip4.ip;

  useEffect(() => {
    if (locationIp) {
      const Geological = () =>
        axios.get(`https://ipapi.co/${locationIp}/json`).then((res) => {
          setIPLocation(res.data);
        });
      Geological();
    }
  }, [locationIp]);

  const trackedCountry = location.country_name;
  const trackedCity = location.city;
  const trackedRegion = location.region;
  const trackedProvider = location.org;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    data.track = pageRoutes;
    data.IPv4 = ip4.ip;
    data.IPv6 = ip6.ip;
    data.trackedCountry = trackedCountry;
    data.trackedCity = trackedCity;
    data.trackedRegion = trackedRegion;
    data.trackedProvider = trackedProvider;
    try {
      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/thank-you");
        reset(initialPayload);
      } else {
        toast.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Error submitting the form");
    }
  };

  const validatePhoneNumber = (value) => {
    const isValidNumber = /^\d{10}$/.test(value.toString());
    return isValidNumber;
  };

  const handleMobileChange = (e) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
    clearErrors("phoneNumber");
  };
  return (
    <Layout>
      <HeadPart
        title={"Contact Us for Clinic Management software Enquiries"}
        description={
          "Reach out to us for inquiries, support, or free demo of Clinic Management Software Solutions. We are here to assist you with our dedicated expert."
        }
        pageLink={"contact-us"}
        imageUrl={AboutPreviewImage}
      />
      <Box className="container">
        <Flex
          className={`${styles.demoLayout}  ${styles.formDemo}`}
          style={{ margin: "25px 0px" }}
        >
          <div className={`${styles.form}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`${styles.heading} ${styles.contactHeading}`}>
                <h3>
                  Tell us how <span className="purple-color">we can Help!</span>
                </h3>
              </div>
              <Grid columns={2} className={styles.formLayout}>
                <div>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    className="purple-color"
                    placeholder="Enter your full name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className={styles.errors}>
                      Full name is required*
                    </span>
                  )}
                </div>
                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    className="purple-color"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className={styles.errors}>Email is required*</span>
                  )}
                </div>
                <div>
                  <label>Phone Number *</label>
                  <input
                    type="number"
                    className="purple-color pl-2"
                    placeholder="Phone Number"
                    maxLength={10}
                    {...register("phoneNumber", {
                      required: true,
                      validate: validatePhoneNumber,
                      valueAsNumber: true,
                      maxLength: 10,
                    })}
                    onChange={(e) => {
                      handleMobileChange(e);
                    }}
                  />
                  <Text className={styles.mobileCode}>+91</Text>
                  {errors.phoneNumber && (
                    <span className={styles.errors}>
                      {errors.phoneNumber.type === "validate"
                        ? "Enter a valid 10-digit number"
                        : "Phone number is required*"}
                    </span>
                  )}
                </div>
                <div>
                  <label>Clinic Name *</label>
                  <input
                    type="text"
                    className="purple-color"
                    placeholder="Enter clinic name"
                    {...register("clinic", { required: true })}
                  />
                  {errors.clinic && (
                    <span className={styles.errors}>
                      Clinic name is required*
                    </span>
                  )}
                </div>
                <div>
                  <label>State *</label>
                  <select
                    {...register("state", { required: true })}
                    onChange={(e) => {
                      setSatateValue(e.target.value);
                    }}
                  >
                    <option value={""} selected disabled>
                      Please Select
                    </option>
                    {StatesData.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <Image
                    alt="down"
                    width={14}
                    height={14}
                    src={down}
                    className={styles.downArror}
                  />
                  {errors.state && (
                    <span className={styles.errors}>State is required*</span>
                  )}
                </div>
                <div>
                  <label>City</label>
                  <select {...register("city")}>
                    <option value={""} selected disabled>
                      Please Select
                    </option>
                    {cities.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <Image
                    alt="doen"
                    width={14}
                    height={14}
                    src={down}
                    className={styles.downArror}
                  />
                </div>
                <div className={styles.address}>
                  <label>Message (Optional)</label>
                  <textarea
                    type="text"
                    rows={5}
                    placeholder="Enter your Message"
                    {...register("message")}
                  />
                </div>
              </Grid>
              <button type="submit" className="purple-btn">
                Send Message
              </button>
            </form>
            <Text className={styles.terms}>
              By clicking <span className="italic">Request demo</span>, I accept
              the Easecare{" "}
              <Link
                className={`purple-color underline ${styles.terms}`}
                href={"/terms-and-condition"}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className={`purple-color underline ${styles.terms}`}
                href={"/privacy-policy"}
              >
                Privacy Notice
              </Link>
            </Text>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.contactRight}>
            <h2>Contact us</h2>
            <h4>EaseCare HealthTech</h4>
            <ul className={styles.contactDetails}>
              <li class="footerCon">
                <Icon
                  icon="mi:call"
                  color="black"
                  width={"20"}
                  height={"20"}
                ></Icon>
                <Link href="tel:+91-8006777110">+91-8006777110</Link>
              </li>
              <li class="footerCon">
                <Icon
                  icon="mdi:email-outline"
                  color="black"
                  width={"20"}
                  height={"20"}
                ></Icon>
                <Link href="mailto:hello@easecare.co">hello@easecare.co</Link>
              </li>
              <li class="addre">
                <Icon
                  icon="ion:location-outline"
                  color="black"
                  width={"35"}
                  height={"35"}
                ></Icon>
                <span>
                  3rd floor, Usha Tower, Kedarpuram, New Canal Road, Mothrowala,
                  Dehradun-248001 (India)
                </span>
              </li>
            </ul>
            <div>
              <ul className={`social-links ${styles.socialLinks}`}>
                <li>
                  <Link
                    target="_blank"
                    style={{ background: "black" }}
                    href={"https://twitter.com/easecare_co"}
                  >
                    <Icon
                      // icon="arcticons:x-twitter"
                      icon="prime:twitter"
                      color="white"
                      height="20"
                      width={"20"}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/easecareco/"}
                  >
                    <Icon icon="devicon:linkedin" height="27" width={"27"} />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/easecareco"}
                  >
                    <Icon icon="logos:facebook" height="27" width="27" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/easecare_co/"}
                  >
                    <Icon
                      // icon="arcticons:x-twitter"
                      icon="skill-icons:instagram"
                      color="white"
                      height="25"
                      width={"25"}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.youtube.com/@easecare_co"}
                  >
                    <Icon icon="logos:youtube-icon" height="27" width="27" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Flex>
      </Box>
      <Testimonail />
    </Layout>
  );
};

export default Contact;
