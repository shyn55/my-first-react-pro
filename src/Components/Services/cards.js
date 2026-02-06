function Cards({icon,title}){
    return(
        <div class="col-4">
            <div class="service-box">
              <div class="service-icon">
                <i class={icon}></i>
              </div>
              <div class="service-content">
                <h3 class="service-title">{title}</h3>
                <p class="service-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  adipisci eaque autem fugiat! Quia, provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
    )
}
export default Cards