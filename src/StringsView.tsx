import {useState} from 'react';
import {areAnagrams} from './stringUtils';

export const StringsView = () => {
    const [isCaseSensitive, setIsCaseSensitive] = useState(false);
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [anagramCheckResult, setAnagramCheckResult] = useState(false);

    return (
        <div>
            <h1>String operations</h1>
            <div className='horz-container'>
                <input type="text" value={string1} onChange={e => setString1(e.target.value)} />
                <input type="text" value={string2} onChange={e => setString2(e.target.value)} />
                <div>
                    <label>
                        <input type="checkbox" checked={isCaseSensitive} onChange={e => setIsCaseSensitive(e.target.checked)} />
                        Case sensitive
                    </label>
                </div>
                <button type='button' onClick={() => setAnagramCheckResult(areAnagrams(string1, string2, isCaseSensitive))}>Check</button>
            </div>
            <div>
                {anagramCheckResult ? 'The strings are anagrams' : 'The strings are not anagrams'}
            </div>
            <ul>
                <li>
                    Strings are anagrams <i className="fas fa-check"/>
                </li>
            </ul>
        </div>
    );
}