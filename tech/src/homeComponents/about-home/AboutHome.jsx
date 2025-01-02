import React from 'react'
import './AboutHome.css'
function AboutHome() {
  return (
    <section className='aboutWrapper container'>
        <div className="aboutWrapper-heading">
                <h2 className='gradient-heading'>HAQQIMIZDA</h2>
        </div>
        <div className="aboutWrapperContent">
            <div className="aboutContentLeft">
                <h3>Texnologiya İlə İrəliyə Baxırıq</h3>
                <div className="aboutContentLeftImg"> 
                <img src="../../../public/about-home.jpg" alt="about-home-img" />
                </div>
            </div>

            <div className="aboutContentRight">
                <h3>Müştərilərimizin məlumatlarını təhlükəsiz saxlamaq və onların rəqəmsal təhlükələrdən qorunmasını təmin etmək bizim üçün prioritetdir.</h3>
                <p>Texnologiyanın sürətlə dəyişdiyi bu dövrdə, biz müştərilərimizlə birlikdə davamlı inkişafı dəstəkləyirik. Komandamız hər bir layihəyə fərdi yanaşaraq, hər bir müştəri üçün uzunmüddətli və effektiv həllər hazırlayır. İstər təhlükəsizlik, istərsə də iş proseslərinin optimallaşdırılması olsun, məqsədimiz müştərilərimizin rəqabət üstünlüyünü artırmaq və onların gələcəyə inamla baxmalarını təmin etməkdir. Bizim üçün hər bir iş əlaqəsi, qarşılıqlı etibar və uzunmüddətli əməkdaşlıq deməkdir.</p>
                <div className='about-btn-div'> <button className='orangeBtn'>Daha ətraflı</button> </div> 
            </div>
        </div>
    </section>
  )
}

export default AboutHome