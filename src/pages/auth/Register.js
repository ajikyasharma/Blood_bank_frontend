import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div style={styles.pageContainer}>
      {error && alert(error)}

      {loading ? (
        <Spinner />
      ) : (
        <div style={styles.cardContainer}>
          {/* Left Section: Image */}
          <div style={styles.imageContainer}>
            <img
              src="/assests/images/banner2.jpg"
              alt="Register Banner"
              style={styles.image}
            />
          </div>

          {/* Right Section: Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.title}> </h2>
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#2d2d2d",
    margin: 0,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    width: "900px",
    backgroundColor: "#444",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
  },
  imageContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    width: "50%",
    padding: "30px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "lime",
  },
};

export default Register;
