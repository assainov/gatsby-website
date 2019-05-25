import React, { useState } from "react"
import { Link } from 'gatsby'
import styles from './article-list.module.scss'
import ToggleButton from 'react-toggle-button'
import Arrow from '../../assets/icons/arrow-down.svg'
import ArticleCard from '../article-card'

export default () => {
    const [dropdown, setDropdown] = useState('date');
    const [darkModeOn, setDarkMode] = useState(false);

    const handleDropdownChange = (event) => {
        setDropdown(event.target.value);
    }

    return (
        <div className={styles.articleList}>
            <div className={styles.controls}>
                <div className={styles.sorting}>
                    <select 
                        className={styles.dropdown} 
                        value={dropdown} 
                        onChange={handleDropdownChange}
                    >
                        <option value="date">Sort by date </option>
                        <option value="popularity">Sort by popularity</option>
                    </select>
                    <Arrow className={styles.dropdownArrow} />
                </div>
                <ToggleButton
                    activeLabel={''}
                    inactiveLabel={''}
                    colors={{
                        activeThumb: {
                          base: 'rgb(0, 0, 0)',
                        },
                        inactiveThumb: {
                          base: 'rgb(255, 255, 255)',
                        },
                        active: {
                          base: 'rgb(255, 255, 255)',
                        },
                        inactive: {
                          base: 'rgb(0, 0, 0)',
                        }
                    }}
                    thumbStyle={{borderRadius: '2px', border: '1px solid #FFF'}}
                    trackStyle={{borderRadius: '2px', border: '1px solid var(--primary-color)'}}
                    value={ darkModeOn }
                    onToggle={(value) => {
                        setDarkMode(!value)
                    }} 
                />
            </div>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    )
}
