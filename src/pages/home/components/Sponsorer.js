
const Sponsor = ({image}) => (
  <div className="col-lg-4 col-sm-12 mt-2">
    <img src={image} width="250" className="mx-auto d-block"/>
  </div>
);

const Sponsorer = () => (
  <div className="container py-5">
    <div className="row pt-5 pb-5 align-items-center">
      <Sponsor image="https://resources.mynewsdesk.com/image/upload/b_auto,c_pad,h_628,q_auto:good,w_1200/txbqrfozfpqajkf8kw1v.jpg"/>
      <Sponsor image="images/USN_logo_rgb.png"/>
      <Sponsor image="https://files.nettsteder.regjeringen.no/wpuploads01/blogs.dir/337/files/2019/06/KD2Cbm_sort.png"/>
    </div>
  </div>
);

export default Sponsorer;