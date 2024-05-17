import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import styles from "../../styles/Demo.module.css";
import down from "@/images/downIcon.svg";
import { useForm } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
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
  const StatesData = State.getStatesOfCountry("IN");
  const getSelectedState = StatesData.find((item) => item.name === stateValue);
  const stateCode = getSelectedState?.isoCode;
  const CityData = City.getCitiesOfState("IN", stateCode);
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Form Submitted successfully");
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
    <>
      <Toaster />
      <Flex className={styles.demoLayout}>
        <img src="/images/demoImg.png" />
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
                  {StatesData.map((item) => (
                    <option key={item.isoCode} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  {/* <option value={"Maharastra"}>Maharastra</option> */}
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
                <label>City *</label>
                <select {...register("city", { required: true })}>
                  <option value={""} selected disabled>
                    Please Select
                  </option>
                  {CityData.map((item) => (
                    <option key={item.stateCode} value={item.name}>
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
                {errors.city && (
                  <span className={styles.errors}>City is required*</span>
                )}
              </div>
              <div className={styles.address}>
                <label>Address *</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className={styles.errors}>Address is required*</span>
                )}
              </div>
            </Grid>
            <button type="submit" className="purple-btn w-full">
              Submit
            </button>
          </form>
          <Text className={styles.terms}>
            By clicking <span className="italic">Request demo</span>, I accept
            the Easecare{" "}
            <span className="purple-color underline">
              <Link href={"/terms-and-condition"}>Terms of Service</Link>
            </span>{" "}
            and{" "}
            <span className="purple-color underline">
              <Link href={"/privacy-policy"}>Privacy Notice</Link>
            </span>
            .
          </Text>
        </div>
      </Flex>
    </>
  );
}
