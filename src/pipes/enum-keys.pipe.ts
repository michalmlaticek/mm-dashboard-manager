import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'EKeys' })
export class EnumKeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        keys.push({ key: parseInt(enumMember), value: value[enumMember] });
      }
    }
    return keys;
  }
}