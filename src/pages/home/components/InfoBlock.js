const InfoBlock = ({title, description, icon}) => (
    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
      <div class="mx-5 mb-5 text-center">
      {icon}
      <span class="text-sub-title lead">{title}</span>
      <p class="text-content mt-3">{description}</p>
      </div>
    </div>
  )

export default InfoBlock;