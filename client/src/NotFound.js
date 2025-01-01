import React from "react";

const NotFound = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background: "linear-gradient(135deg, #020024, #090979, #00d4ff)",
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            overflow: "hidden",
        },
        content: {
            textAlign: "center",
            zIndex: 10,
        },
        title: {
            fontSize: "10rem",
            fontWeight: "bold",
            margin: 0,
            animation: "float 4s ease-in-out infinite",
        },
        text: {
            fontSize: "1.5rem",
            margin: "20px 0",
            color: "#ddd",
        },
        btn: {
            display: "inline-block",
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#ff6f61",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "4px",
            transition: "background 0.3s ease",
        },
        btnHover: {
            backgroundColor: "#ff3b2d",
        },
        planet: {
            position: "absolute",
            bottom: "-50px",
            right: "50%",
            transform: "translateX(50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "rotate 10s linear infinite",
        },
        sphere: {
            width: "100px",
            height: "100px",
            background: "radial-gradient(circle, #ffffff, #d4d4d4)",
            borderRadius: "50%",
            position: "absolute",
        },
        ring: {
            width: "150px",
            height: "150px",
            border: "4px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "50%",
            position: "absolute",
            animation: "spin 4s linear infinite",
        },
        "@keyframes spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
        },
        "@keyframes float": {
            "0%, 100%": { transform: "translateY(-20px)" },
            "50%": { transform: "translateY(20px)" },
        },
        "@keyframes rotate": {
            "0%": { transform: "translateX(50%) rotate(0deg)" },
            "100%": { transform: "translateX(50%) rotate(360deg)" },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>404</h1>
                <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
                <a
                    href="/"
                    style={{
                        ...styles.btn,
                        ":hover": styles.btnHover,
                    }}
                >
                    Go Back Home
                </a>
            </div>
            <div style={styles.planet}>
                <div style={styles.ring}></div>
                <div style={styles.sphere}></div>
            </div>
        </div>
    );
};

export default NotFound;
