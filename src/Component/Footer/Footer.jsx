import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    
    <div>
        <div className=" container">
  <div className="row">
    	<div className="col-md-12">
    	    <footer className="footer">				
		<div className="container">
			<div className="row ">
				
				<div className="col-lg-2 col-md-6">
					<div className="footer-title  ">
						Key Series
					</div>	
					<div className="footer-links">
						<Link to="/">
						T20 World Cup
						</Link>
						<Link to="/">
							Austrila v England
						</Link>
						<Link to="/">
							New Zealand v India
						</Link>
						<Link to="/">
							Sri Lanka v West Indes
						</Link>
                        	<Link to="/">
							Austrila v West Indes
						</Link>
						<Link to="/">
							IRE-W in Pakistan
						</Link>
						<Link to="qeaTrophy">
							QEA Trophy
						</Link>
						<Link to="/">
							Wallstreet
						</Link>	<Link to="/">
							WBBL 2002
						</Link>
						<Link to="/">
							Marsh Cup
						</Link>
						<Link to="/">
							Sheffield Sheild
						</Link>
						<Link to="/">
							WWomen's ChanpionShip
						</Link>
                        	<Link to="/">
							CSA 4-Day Series
						</Link>
						<Link to="/">
							World Test Championship
						</Link>
						<Link to="/">
							World Cup Super Leauge
						</Link>
						
					</div>
				</div>
                <div className="col-lg-2 col-md-6">
					<div className="footer-title ">
						Quicks Links
					</div>	
					<div className="footer-links">
						<Link to="/">
							T20 Timeout
						</Link>
						<Link to="/">
							T20 Time Out
						</Link>
						<Link to="/">
							Fantasy Pack
						</Link>
						<Link to="/">
							ICC Ranking
						</Link>
					</div>
				</div><div className="col-lg-3 col-md-6">
					<div className="footer-title ">
						ESPNcricinfo Apps
					</div>	
					<div className="footer-links">
						<Link to="/">
							Android App
						</Link>
						<Link to="/">
							iOS App
						</Link>
						
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-title ">
						Follow ESPNcricinfo
					</div>	
					<div className="footer-links">
						<Link to="/">
							Instagram
						</Link>
						<Link to="/">
							Twitter
						</Link>
						<Link to="/">
							Facebook
						</Link>
						<Link to="/">
							YouTube
						</Link>
					</div>
				</div>
				<div className="col-lg-2 col-md-6">
					<div className="footer-title ">
						ESPN Sites
					</div>	
					<div className="footer-links">
						<Link to="/">
							The Cricket Monthly
						</Link>
						<Link to="/">
							ESPN
						</Link>
						
					</div>

					
						
					
				</div>
			</div>
		</div>
	</footer>
	<div className="footer-bottom">
		© 2022 ESPN Sports Media Ltd. All rights reserved
	</div>
    	</div>
	</div>
</div>
    </div>
  )
}
