import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();
  const moveToOrder = () => {
    navigate("/Orders");
  };
  return (
    <div className="container-fluid" id="home">
      <h1 className="header">Sicilian Heart</h1>
      <h3 className="subheader">ברוכים הבאים למסעדה איטלקית סיציליאנית</h3>
      <Button
        variant="contained"
        color="error"
        style={{ width: "50%", height: "10%" }}
        onClick={moveToOrder}
      >
        <h1>...הזמינו עכשיו</h1>
      </Button>
      <div className="card" style={{ maxWidth: "90vh" }}>
        <div className="card-body">
          <h5 className="card-title">מטבח סיציליאני</h5>
          <p className="card-text">
            במסעדה טאבון מרכזי ענק ובו מכינים במומחיות מאפים, לחמים, פיצות ועוד
            מנות מפתות, שבהן שופע התפריט. בין השאר תוכלו ליהנות במקום ממנות
            ראשונות כדוגמת: מבחר סלטי פתיחה צבעוניים; קרפצ'יו תמנון; שרימפס בלאק
            טייגר האפוי עם רוטב חמאת זרעי עגבניות וצ’ילי; ארנצ'יני – כדורי
            ריזוטו בציפוי פריך; ורבות ואחרות. לעיקריות יוגשו לכם מנות כמו למשל:
            פיצות במבחר סגנונות; פסטה חונקי כמרים קרצ'ופו עם שמן זית, ארטישוק,
            עגבניות שרי, זיתים, צלפים וקונפי שום; פסטה פפרדלה ראגו עם בקר "7
            שעות" וטרטר עגבניות; סטייק פילה בקר עשוי בגריל עם קנלוני פטריות
            ותפו"א, שעועית ירוקה, רוטב יין אדום ושאלוט; פילה דניס אפוי עם קראסט
            שקדים על מצע רביולי חצילים ברוטב סרטנים; ושאר תענוגות חך. יש כמובן
            גם קינוחים מופלאים וכן מתמחה המקום בקוקטיילים משמחי לבב אנוש.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
