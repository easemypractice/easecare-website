import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
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
export default function DemoComp() {
  const initialPayload = {
    name: "",
    email: "",
    phoneNumber: "",
    clinic: "",
    state: "",
    city: "",
    address: "",
  };

  const [stateValue, setSatateValue] = useState("");
  const [ip4, setIP4] = useState({});
  const [ip6, setIP6] = useState({});
  const [location, setIPLocation] = useState({});
  const [cities, setCities] = useState([]);
  const StatesData = State.getStatesOfCountry("IN");
  const getSelectedState = StatesData.find((item) => item.name === stateValue);
  const stateCode = getSelectedState?.isoCode;
  const router = useRouter();
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
      const response = await fetch("/api/submit-form", {
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
  const TransformHealthData = [
    {
      point: "Streamline Patient Care",
    },
    {
      point: "Seamless Online Appointment Booking",
    },
    {
      point: "Automated Appointment Reminders",
    },
    {
      point: "Video Consultant with Patients ",
    },
    {
      point: "Easy to Manage Patient Record",
    },
    {
      point: "24x7 Instant Booking",
    },
    {
      point: "Easy Billing and Payment Process",
    },
  ];
  return (
    <>
      <Flex className={styles.demoLayout}>
        <div className={styles.leftbar}>
          <h1 className={styles.heading}>Transforming Healthcare</h1>
          <ul>
            {TransformHealthData.map((item, index) => (
              <li key={index}>
                <Image src={checkedIcon} width={28} height={28} />
                <Text>{item.point}</Text>
              </li>
            ))}
            <li>
              <Text className={styles.moreFeture}>+50 more features...</Text>
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.heading}>
              <h3>
                Book a <span className="purple-color">Free Demo</span>
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
                  <span className={styles.errors}>Full name is required*</span>
                )}
              </div>
              <div>
                <label>Work Email *</label>
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
                  alt="doen"
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
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address")}
                />
              </div>
            </Grid>
            <button type="submit" className="purple-btn w-full">
              Submit
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
      </Flex>
    </>
  );
}
