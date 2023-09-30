import style from "./style.module.css";
import Question from "./question";

export default function Faq() {
    return (
        <div className={style.container}>
            <h2>Frequently asked questions</h2>

            <Question
                question="What is JobLeads?"
                response={`JobLeads empowers job seekers by streamlining their search for the ideal career opportunity and providing them with all the tools necessary to land a better job faster.
                
                Join over eight million experienced professionals and graduates who have used JobLeads’ unique toolkit of digital tools and expert guidance to get ahead in their careers.`}
            />

            <Question
                question="How does JobLeads help me land a job?"
                response="JobLeads has helped thousands of people land jobs at top companies like PwC, Microsoft, Bank of America, Amazon, and Roland Berger.

                Our expert coaching and digital tools have been developed by real hiring managers and seasoned career coaches with a clear mission in mind: land a better job faster.
                "
            />
            <Question
                question="How does JobLeads help me land a job?"
                response="JobLeads has helped thousands of people land jobs at top companies like PwC, Microsoft, Bank of America, Amazon, and Roland Berger.

                Our expert coaching and digital tools have been developed by real hiring managers and seasoned career coaches with a clear mission in mind: land a better job faster.
                "
            />
        </div>
    );
}
