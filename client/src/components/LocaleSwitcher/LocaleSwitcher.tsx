import {useLocale} from 'next-intl';
import {locales} from '@/localesConfig';
import LocaleSwitcherSelect from '@/components/LocaleSwitcher/LocaleSwitcherSelect';

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label="switch">
            {locales.map((cur) => (
                <option key={cur} value={cur}>
                    {cur}
                </option>
            ))}
        </LocaleSwitcherSelect>
    );
}