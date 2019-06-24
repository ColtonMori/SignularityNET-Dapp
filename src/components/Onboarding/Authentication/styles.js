export const useStyles = theme => ({
    authenticationContent: {
        width: 630,
        paddingBottom: 40,
        margin: "40px auto 0",
        backgroundColor: theme.palette.text.white,
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
        textAlign: "center",
        "& h3": {
            padding: "15px 0 15px 25px",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: theme.palette.text.gray5,
            margin: 0,
            color: theme.palette.text.black1,
            fontSize: 20,
            textAlign: "left",
        },
        "@media (max-width:724px)": {
            width: "90%",
        },
    },
    validateEmailDescription: {
        padding: "30px 50px 20px",
        margin: 0,
        color: theme.palette.text.gray10,
        fontSize: 14,
        fontFamily: theme.typography.secondary.main,
        lineHeight: "21px",
        textAlign: "left",
        "& span": {
            fontWeight: theme.typography.fontweight,
        },
    },
    pendingSection: {
        marginBottom: 20,
        color: theme.palette.text.orange,
        fontWeight: theme.typography.fontweight,
        "& i": {
            fontSize: 12,
            paddingRight: 10,
        },
    },
    textField: {
        width: "60%",
        margin: 0,
        "& label": {
            color: "rgba(0,0,0,.87) !important",
        },
    },
    buttonsContainer: {
        marginTop: 40,
        "& button": {
            padding: " 13px 60px 11px",
        },
    },
    infoText: {
        margin: 0,
        fontSize: "12.17px",
        padding: "0 0 0 128px",
        textAlign: "left",
    },
    errorMsg: { color: theme.palette.text.gray6 },
    verifiedText: { color: theme.palette.text.aqua },
});
