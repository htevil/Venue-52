import SE_img from '../../../asset/Amenities/Segregated Entries.png';
import FL_img from '../../../asset/Amenities/Flexible Layouts.png';
import NL_img from '../../../asset/Amenities/Natural Light.png';
import VCO_img from '../../../asset/Amenities/Vastu Compliant Office.png';
import PP_img from '../../../asset/Amenities/Power Protection.png';
import SEL_img from '../../../asset/Amenities/Service Elevator.png';
import SA_img from '../../../asset/Amenities/Staff Amenities.png';



export default function Section3() {
    return (
        <section id="Amenities">
            <div className="container1">
                <h1 className='main-heading'>Amenities</h1>
                <div className='s3-div1'>
                    <div className='s3-subdiv1' id='ame_1'>
                        <img src={SE_img} alt="SE_img" className='ame-img' />
                        <h3 className='sub-heading'>Segregated Entries</h3>
                        <span>Separate retail, commercial and service entry</span>
                    </div>
                    <div className='s3-subdiv1' id='ame_2'>
                        <img src={FL_img} alt="FL_img" className='ame-img' />
                        <h3 className='sub-heading'>Flexible Layouts</h3>
                        <span>Easy reconfiguration for single or multiple offices.</span>
                    </div>
                    <div className='s3-subdiv1' id='ame_3'>
                        <img src={NL_img} alt="NL_img" className='ame-img' />
                        <h3 className='sub-heading'>Natural Light</h3>
                        <span>Offices with natural light, views and ventilation.</span>
                    </div>
                    <div className='s3-subdiv1' id='ame_4'>
                        <img src={VCO_img} alt="VCO_img" className='ame-img' />
                        <h3 className='sub-heading'>Vastu Compliant Office</h3>
                        <span>Boost productivity and harmony in your office with vastu-compliant designs for the building & offices.</span>
                    </div >
                    <div clclassName='s3-subdiv1' id='ame_5'>
                        <img src={PP_img} alt="PP_img" className='ame-img' />
                        <h3 className='sub-heading'>Power Protection</h3>
                        <span>Substation and backup generator onsite for essential services.</span>
                    </div>
                    <div className='s3-subdiv1' id='ame_6'>
                        <img src={SEL_img} alt="SEL_img" className='ame-img' />
                        <h3 className='sub-heading'>Service Elevator</h3>
                        <span>Dedicated toilets for support staff.</span>
                    </div>
                    <div className='s3-subdiv1' id='ame_7'>
                        <img src={SA_img} alt="SA_img" className='ame-img' />
                        <h3 className='sub-heading'>Staff Amenities</h3>
                        <span>Dedicated service elevator for goods movement, delivery agencies, etc.</span>
                    </div>
                </div>
            </div>
        </section>
    );

}