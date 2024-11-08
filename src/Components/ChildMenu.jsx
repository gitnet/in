import React from 'react'
import datamenu from './menuData.json'
export default function ChildMenu() {
  return (
    <div>
        <div className="offcanvas-header">
        <button type="button" className="btn-close btn-close-white ms-3" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 p-4">
            {datamenu.map((allLinks)=>(
            <li key={allLinks.id}  className="nav-item">
                <a className={`nav-link ${allLinks.is_active ? 'active' : ''} text-uppercase ls-4 text-white`} aria-current="page" href={allLinks.link_url}>
                        {allLinks.link_txt}
                    {allLinks.link_pro? <span className="badge bg-primary">PRO</span> : ""}
                </a>
            </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
