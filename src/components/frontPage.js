import React from 'react';
import '../style/styles.css';
const FrontPage = (props) =>{
    return(
     
     <section>
       <nav className="Parent">
            <div className="TextLeft">
          
                 <p><span className="iconTrans"> <i class="fas fa-car"></i> </span>
                    <span className="BigSize">R</span>
                    ate
                    <span className="BigSize">A</span>
                    ny
                    <span className="BigSize">C</span>ar
                 </p>
            </div>
            <div className="TextRight">
                <a href="#">About</a>
                <a href="#">Team</a>
             </div>
       </nav>
       
        <div className="ParentBlueBody">
         <div className="TextBodyStyle">
                    <div className="FirstBox">Get Your Dream Car</div>
                    <div className="ChildBox">
                        <div className="SecondBox"><span className="iconT"><i class="fas fa-car-side"></i></span>Predictor Choice</div>
                        <div className="ThirdBox"><span className="iconT"><i class="far fa-address-book"></i></span>consultancy</div>

                    </div>
             </div>   
            
            <div  className="FormStyle">
              
                      
        <select class="form-control form-control-lg" name="Brand" id="b1" onchange="populate(this.id,'m1')">
            <option>Brand</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Changan">Changan</option>
            <option value="Classic & Antiques">Classic & Antiques</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Daihatsu">Daihatsu</option>
            <option value="FAW">FAW</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="KIA">KIA</option>
            <option value="Lexus">Lexus</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Porsche">Porsche</option>
            <option value="Range Rover">Range Rover</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
        </select>
   
        <select class="form-control form-control-lg">
            <option>Model</option>
        </select>
        <select class="form-control form-control-lg"  name="Year" id="y1">
                <option>Year</option>
                <option value="1925">1925</option>
                <option value="1943">1943</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1960">1960</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
        </select>
         <select class="form-control form-control-lg">
                 <option>Fuel</option>
         </select>
         <select class="form-control form-control-lg"  name="City" id="c1">
                <option>City</option>
                <option value="Abbottabad">Abbottabad</option>,
                <option value="Ali Masjid">Ali Masjid</option>,
                <option value="Askoley">Askoley</option>,
                <option value="Attock">Attock</option>,
                <option value="Badin">Badin</option>,
                <option value="Bagh">Bagh</option>,
                <option value="Bahawalnagar">Bahawalnagar</option>,
                <option value="Bahawalpur">Bahawalpur</option>,
                <option value="Bela">Bela</option>,
                <option value="Bhimber">Bhimber</option>,
                <option value="Chilas">Chilas</option>,
                <option value="Chiniot">Chiniot</option>,
                <option value="Chitral">Chitral</option>,
                <option value="Faisalabad">Faisalabad</option>,
                <option value="Haripur">Haripur</option>,
                <option value="Hyderabad">Hyderabad</option>,
                <option value="Islamabad">Islamabad</option>,
                <option value="Kandhura">Kandhura</option>,
                <option value="Karachi">Karachi</option>,
                <option value="Karak">Karak</option>,
                <option value="Kasur">Kasur</option>,
                 <option value="Khairpur">Khairpur</option>,
                <option value="Khanewal">Khanewal</option>,
                <option value="Khanpur">Khanpur</option>,
                <option value="Khaplu">Khaplu</option>,
                <option value="Khushab">Khushab</option>,
                <option value="Lahore">Lahore</option>,
                <option value="Larkana">Larkana</option>,
                <option value="Lasbela">Lasbela</option>,
                <option value="Mardan">Mardan</option>,
                <option value="Multan">Multan</option>,
                <option value="Nawabshah">Nawabshah</option>,
                <option value="Pakpattan">Pakpattan</option>,
                <option value="Peshawar">Peshawar</option>,
                <option value="Quetta">Quetta</option>,
                <option value="Rahimyar Khan">Rahimyar Khan</option>,
                <option value="Rawalpindi">Rawalpindi</option>,
                <option value="Sahiwal">Sahiwal</option>,
                <option value="Sargodha">Sargodha</option>,
                <option value="Sialkot">Sialkot</option>,
                <option value="Sukkar">Sukkar</option>,
                <option value="Sukkur">Sukkur</option>
                <option value="Tank">Tank</option>
                <option value="Vehari">Vehari</option>
        </select>
        <select class="form-control form-control-lg">
            <option>Mileage</option>
            <option value="5000">5000</option>,
                <option value="10000">10000</option>,
            <option value="20000">20000</option>,
            <option value="30000">30000</option>,
            <option value="40000">40000</option>,
            <option value="50000">50000</option>,
            <option value="60000">60000</option>,
            <option value="70000">70000</option>,
            <option value="80000">80000</option>,
            <option value="90000">90000</option>,
            <option value="100000">100000</option>,
                               

       
         </select>
         <select class="form-control form-control-lg">
             <option>Enter Email</option>
         </select>
        <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
    </div>
 

        </div>
     </section>

    )
}
export default FrontPage
