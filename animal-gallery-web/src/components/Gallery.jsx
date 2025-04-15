import React from 'react';

function Gallery() {
  return (
    <div id="gallery" className="container my-5" style={{ marginTop: '120px' }}>
      <h2 className="text-center mb-4">Animal Gallery</h2>
      <div className="row g-3">  
        <div className="col-md-3 col-sm-6">
          <img src="/images/lion-nature.jpg" className="img-fluid rounded" alt="Lion" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/pexels-pixabay-162203.jpg" className="img-fluid rounded" alt="Tiger" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/pexels-rudy-kirchner-278171-1750820.jpg" className="img-fluid rounded" alt="Elephant" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>
        <div className="col-md-3 col-sm-6">
          <img src="/images/laurathexplaura-3608263.jpg" className="img-fluid rounded" alt="Panda" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img18.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img15.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/imgs132.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img-45853.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img12.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img17.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img8.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img3.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img-219906.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img10.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img-50577.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>

        <div className="col-md-3 col-sm-6">
          <img src="/images/img-635499.jpg" className="img-fluid rounded" alt="img" style={{ height: '300px', objectFit: 'cover', width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
