import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';
import * as leetCode from '../json/leet-code.json';
import { LeetCode } from '../interfaces/leet-code';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-leet-code-questions',
  templateUrl: './leet-code-questions.component.html',
  styleUrls: ['./leet-code-questions.component.scss']
})
export class LeetCodeQuestionsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private toastr: ToastrService) { }

  leetCodes: LeetCode[] = [];
  leetCode: LeetCode;
  language: string = 'C#';


  setLanguage() {
    if (this.language === 'C#') {
      this.language = 'JavaScript';
    } else {
      this.language = 'C#';
    }
  }

  showDetails(num: number) {
    switch (num) {
      case 1:
        this.isDetails1 = !this.isDetails1;
        break;
      case 2:
        this.isDetails2 = !this.isDetails2;
        break;
      case 3:
        this.isDetails3 = !this.isDetails3;
        break;
      case 4:
        this.isDetails4 = !this.isDetails4;
        break;
      case 5:
        this.isDetails5 = !this.isDetails5;
        break;
      case 6:
        this.isDetails6 = !this.isDetails6;
        break;
      case 7:
        this.isDetails7 = !this.isDetails7;
        break;
      case 8:
        this.isDetails8 = !this.isDetails8;
        break;
      case 9:
        this.isDetails9 = !this.isDetails9;
        break;
      case 10:
        this.isDetails10 = !this.isDetails10;
        break;
    }
    this.isReadMore = !this.isReadMore;
  }
  scroll(element: HTMLElement) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  scrollTo(id: string) {
    const elements = document.querySelectorAll('.accordion-active');

    elements.forEach((element) => {
      element.classList.remove('accordion-active');
    });
    let el = document.getElementById(id);
    let element: HTMLElement = document.getElementById(id);
    // element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('accordion-active');
    if (id === 'selectList') {
      this.refresh();
    }

  }

  removeClass(id: string) {
    // let el = document.getElementById(id);
    // el.classList.remove('accordion-active');
    const elements = document.querySelectorAll('.accordion-active');
    elements.forEach((element) => {
      element.classList.remove('accordion-active');
    });
    this.refresh();
  }

  navigate(url) {
    window.open(url, '_blank');
  }

  refresh() {
    this.leetCode = {
      Id: null,
      Title: '-1',
      DifficultyLevel: null,
      Difficulty: '',
      Url: '',
    };
    const elements = document.querySelectorAll('.accordion-active');

    elements.forEach((element) => {
      element.classList.remove('accordion-active');
    });
  }

  codes: number[] = [
    1, 3, 7, 9, 11, 13, 14, 20, 26, 27, 28, 35, 42, 58, 59, 66, 69, 70, 76, 88, 121, 136, 169, 202, 217, 242, 258, 326, 347,
    387, 442, 448, 704, 1470, 1480, 1491, 1822, 2351, 2357, 2404, 2442, 2529
  ];

  processHtml(html: string) {
    return [html.slice(0, 12), 'padding:20px;', html.slice(12)]
      .join('')
      .replace('{', '&#123;')
      .replace('}', ' &#125;');
  }

  showDetails1() {
    this.isReadMore = !this.isReadMore;
  }

  isReadMore: boolean;
  isDetails1: boolean;
  isDetails2: boolean;
  isDetails3: boolean;
  isDetails4: boolean;
  isDetails5: boolean;
  isDetails6: boolean;
  isDetails7: boolean;
  isDetails8: boolean;
  isDetails9: boolean;
  isDetails10: boolean;

  isChecked: boolean = true;
  show: any;
  show2: any;

  jsMaximumCount = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">maximumCount</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(nums<span style="color:#b4b4b4;">.</span>filter(n&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)<span style="color:#b4b4b4;">.</span>length,&nbsp;nums<span style="color:#b4b4b4;">.</span>filter(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)<span style="color:#b4b4b4;">.</span>length);
    };</pre>`;
  jsMaximumCountSafe: SafeHtml;

  jsMostFrequentEven = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">mostFrequentEven</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;{};
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">max</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">maxKey</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;&quot;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[i]&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">2</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map[nums[i]]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map[nums[i]]&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;((Object<span style="color:#b4b4b4;">.</span>keys(map)<span style="color:#b4b4b4;">.</span>length)&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;map)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map[x]&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;max)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map[x];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxKey&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;x;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;maxKey;
    };</pre>`;
  jsMostFrequentEvenSafe: SafeHtml;

  jsMinimumOperations = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">minimumOperations</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;operations&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>find(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>filter(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>min(..<span style="color:#b4b4b4;">.</span>arr);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[i]&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[i]&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;x;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operations<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>find(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>filter(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>min(..<span style="color:#b4b4b4;">.</span>arr);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;operations;
    };</pre>`;
  jsMinimumOperationsSafe: SafeHtml;

  jsRepeatedCharacter = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">repeatedCharacter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s)&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(c&nbsp;<span style="color:#9cdcfe;">of</span>&nbsp;s)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(c))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b5cea8;">1</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;c;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
  };</pre>`;
  jsRepeatedCharacterSafe: SafeHtml;

  jsArraySign = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">arraySign</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(nums<span style="color:#b4b4b4;">.</span>includes(<span style="color:#b5cea8;">0</span>))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">count</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[i]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;count&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">2</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    };</pre>`;
  jsArraySignSafe: SafeHtml;

  jsAverage = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">average</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(salary)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;salary<span style="color:#b4b4b4;">.</span>sort(function(a,&nbsp;<span style="color:#9cdcfe;">b</span>)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;a&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;b;
    &nbsp;&nbsp;&nbsp;&nbsp;});
    &nbsp;&nbsp;&nbsp;&nbsp;salary&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;salary<span style="color:#b4b4b4;">.</span>slice(<span style="color:#b5cea8;">1</span>,&nbsp;salary<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;salary<span style="color:#b4b4b4;">.</span>forEach(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;x;
    &nbsp;&nbsp;&nbsp;&nbsp;})
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;sum&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;salary<span style="color:#b4b4b4;">.</span>length;
    };</pre>`;
  jsAverageSafe: SafeHtml;

  jsRunningSum = `<pre style="font-family:Cascadia Mono;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">runningSum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">function</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">let</span>&nbsp;<span style="color:gainsboro;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Array</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">length</span><span style="color:gainsboro;">);</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">];</span>
    
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">let</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">];</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">;</span>
    <span style="color:gainsboro;">};</span></pre>`;
  jsRunningSumSafe: SafeHtml;

  jsShuffle = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">shuffle</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums,&nbsp;n)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[]&nbsp;;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;n;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[counter]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[counter&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums[n&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:#b5cea8;">2</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;arr;
    };</pre>`;
  jsShuffleSafe: SafeHtml;

  jsBinarySearch = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">search</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums,&nbsp;target)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>(nums<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;nums[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;target)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">midpoint</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(nums<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[midpoint]&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>indexOf(target);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(target&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr[midpoint])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>slice(<span style="color:#b5cea8;">0</span>,&nbsp;midpoint);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>slice(midpoint,&nbsp;arr<span style="color:#b4b4b4;">.</span>length);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;midpoint&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>indexOf(target);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    };</pre>`;
  jsBinarySearchSafe: SafeHtml;

  jsFindDisappearedNumbers = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">findDisappearedNumbers</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[]&nbsp;;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Set(nums);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>set<span style="color:#b4b4b4;">.</span>has(i))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result<span style="color:#b4b4b4;">.</span>push(i);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsFindDisappearedNumbersSafe: SafeHtml;

  jsFindDuplicates = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">findDuplicates</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">n</span>&nbsp;of&nbsp;nums)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(n))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(n,&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(n,&nbsp;map<span style="color:#b4b4b4;">.</span>get(n)&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let[key,&nbsp;val]&nbsp;of&nbsp;map<span style="color:#b4b4b4;">.</span>entries())
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(val&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">2</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result<span style="color:#b4b4b4;">.</span>push(key);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsFindDuplicatesSafe: SafeHtml;

  jsFirstUniqChar = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">firstUniqChar</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;of&nbsp;s)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(c))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">val</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(c);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b4b4b4;">++</span>val);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let[key,&nbsp;val]&nbsp;of&nbsp;map<span style="color:#b4b4b4;">.</span>entries())
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(val&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;s<span style="color:#b4b4b4;">.</span>indexOf(key);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    };</pre>`;
  jsFirstUniqCharSafe: SafeHtml;

  jsTopKFrequent = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">topKFrequent</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums,&nbsp;k)&nbsp;{
      &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
      &nbsp;&nbsp;&nbsp;&nbsp;nums<span style="color:#b4b4b4;">.</span>forEach(<span style="color:#9cdcfe;">num</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>has(num))
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(num,&nbsp;map<span style="color:#b4b4b4;">.</span>get(num)&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(num,&nbsp;<span style="color:#b5cea8;">1</span>);
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
      &nbsp;&nbsp;&nbsp;&nbsp;});
      &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Array<span style="color:#b4b4b4;">.</span>from(<span style="color:#569cd6;">new</span>&nbsp;Map([..<span style="color:#b4b4b4;">.</span>map<span style="color:#b4b4b4;">.</span>entries()]<span style="color:#b4b4b4;">.</span>sort((<span style="color:#9cdcfe;">a</span>,&nbsp;<span style="color:#9cdcfe;">b</span>)&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;b[<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;a[<span style="color:#b5cea8;">1</span>]))<span style="color:#b4b4b4;">.</span>keys())<span style="color:#b4b4b4;">.</span>slice(<span style="color:#b5cea8;">0</span>,&nbsp;k);
      };</pre>`;
  jsTopKFrequentSafe: SafeHtml;

  jsIsPowerOfThree = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">isPowerOfThree</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(n)&nbsp;{
    &nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;(Math<span style="color:#b4b4b4;">.</span>log10(n)&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>log10(<span style="color:#b5cea8;">3</span>))&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    };</pre>`;
  jsIsPowerOfThreeSafe: SafeHtml;

  jsIsAnagram = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">isAnagram</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s,&nbsp;t)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;{};
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map[s[i]])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map[s[i]]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;map[s[i]]<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;t<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map[t[i]]&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;map[t[i]]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;map[t[i]]<span style="color:#b4b4b4;">--</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">key</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;map)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map[key]&nbsp;<span style="color:#b4b4b4;">!==</span>&nbsp;<span style="color:#b5cea8;">0</span>)&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
    };</pre>`;
  jsIsAnagramSafe: SafeHtml;

  jsAddDigits = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">addDigits</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(num)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;0(1),&nbsp;Space:&nbsp;O(1)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;num&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;:&nbsp;(num&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">9</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">9</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;num&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">9</span>;
    };</pre>`;
  jsAddDigitsSafe: SafeHtml;

  jsContainsDuplicate = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">containsDuplicate</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">num</span>&nbsp;of&nbsp;nums)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(num))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(num,&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(num);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(num,&nbsp;x);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let[key,&nbsp;value]&nbsp;of&nbsp;map<span style="color:#b4b4b4;">.</span>entries())
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(value&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    };</pre>`;
  jsContainsDuplicateSafe: SafeHtml;

  jsIsHappy = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">isHappy</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(n)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n)),&nbsp;Space:&nbsp;O(1)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;sum&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(n&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>pow(n&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span>,&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(n&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">10</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(n&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">true</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(sum&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">4</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;sum;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    };</pre>`;
  jsIsHappySafe: SafeHtml;

  jsMajorityElement = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;">
  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">majorityElement</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;counter&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums[<span style="color:#b5cea8;">0</span>];
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">n</span>&nbsp;of&nbsp;nums)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(counter&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;n;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(n&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;result)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">--</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
  };</pre>`;
  jsMajorityElementSafe: SafeHtml;

  jsSingleNumber = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">singleNumber</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">num</span>&nbsp;of&nbsp;nums)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;result&nbsp;<span style="color:#b4b4b4;">^</span>&nbsp;num;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsSingleNumberSafe: SafeHtml;

  jsMaxProfit = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">maxProfit</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(prices)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;maxProfit&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">min</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(Math<span style="color:#b4b4b4;">.</span>pow(<span style="color:#b5cea8;">10</span>,&nbsp;<span style="color:#b5cea8;">4</span>));
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;prices<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(prices[i]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;prices[i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>min(min,&nbsp;prices[i]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxProfit&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(maxProfit,&nbsp;(prices[i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;min));
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;maxProfit;
    };</pre>`;
  jsMaxProfitSafe: SafeHtml;

  jsMerge = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">merge</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums1,&nbsp;m,&nbsp;nums2,&nbsp;n)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(m&nbsp;+&nbsp;n),&nbsp;Space:&nbsp;O(1)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(n&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(m&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;nums1<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums1&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums2;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;m&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;<span style="color:#9cdcfe;">j</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;<span style="color:#9cdcfe;">k</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;m&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;j&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums1[i]&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;nums2[j])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums1[k<span style="color:#b4b4b4;">--</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums1[i<span style="color:#b4b4b4;">--</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums1[k<span style="color:#b4b4b4;">--</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums2[j<span style="color:#b4b4b4;">--</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(j&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums1[k<span style="color:#b4b4b4;">--</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums2[j<span style="color:#b4b4b4;">--</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;}
    };</pre>`;
  jsMergeSafe: SafeHtml;

  jsMinWindow = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">minWindow</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s,&nbsp;t)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n+m)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;map&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;of&nbsp;t)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(c))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">val</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(c);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b4b4b4;">++</span>val);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">right</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>size,&nbsp;<span style="color:#9cdcfe;">minLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length)
    &nbsp;&nbsp;&nbsp;&nbsp;{
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">rightChar</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s[right<span style="color:#b4b4b4;">++</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>has(rightChar))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(rightChar,&nbsp;map<span style="color:#b4b4b4;">.</span>get(rightChar)&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>get(rightChar)&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">--</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(counter&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;minLength)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s<span style="color:#b4b4b4;">.</span>substr(left,&nbsp;minLength);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">leftChar</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s[left<span style="color:#b4b4b4;">++</span>];
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>has(leftChar))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(leftChar,&nbsp;map<span style="color:#b4b4b4;">.</span>get(leftChar)&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>get(leftChar)&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsMinWindowSafe: SafeHtml;

  jsClimbStairs = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">climbStairs</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(n)&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;fibonacci(n&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
  };

  <span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">fibonacci</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(n)&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(n&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">2</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;n;
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">2</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;n;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr[i&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;arr[i&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">2</span>];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;arr[n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;arr[n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">2</span>];
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>`;
  jsClimbStairsSafe: SafeHtml;

  jsMySqrt = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">mySqrt</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(x)&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">2</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;x;
  
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">y</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;x;
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">z</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(y&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;y))&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>;
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(y&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;z&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;z;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(y&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;y))&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(z);
  };</pre>`;
  jsMySqrtSafe: SafeHtml;

  jsPlusOne = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">plusOne</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(digits)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[]&nbsp;;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;digits<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i<span style="color:#b4b4b4;">--</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(digits[i]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">9</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digits[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;digits[i]&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;digits;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digits[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;result[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;digits<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result[i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;digits[i];
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsPlusOneSafe: SafeHtml;

  jsSpiralMatrix2 = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">generateMatrix</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(n)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;results&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;n;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results<span style="color:#b4b4b4;">.</span>push([]);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">startrow</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">endrow</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">startcol</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">endcol</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(startcol&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;endcol&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;startrow&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;endrow)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;startcol;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;endcol;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results[startrow][i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;counter;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startrow<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;loop&nbsp;from&nbsp;start&nbsp;row&nbsp;to&nbsp;end&nbsp;row&nbsp;(this&nbsp;is&nbsp;the&nbsp;right&nbsp;column)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;startrow;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;endrow;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results[i][endcol]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;counter;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;decrement&nbsp;end&nbsp;column</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endcol<span style="color:#b4b4b4;">--</span>;
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Bottom&nbsp;row</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;endcol;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;startcol;&nbsp;i<span style="color:#b4b4b4;">--</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results[endrow][i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;counter;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;decrement&nbsp;end&nbsp;row</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endrow<span style="color:#b4b4b4;">--</span>;
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;start&nbsp;column</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;endrow;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;startrow;&nbsp;i<span style="color:#b4b4b4;">--</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;results[i][startcol]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;counter;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;increment&nbsp;start&nbsp;column</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startcol<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;results;
    &nbsp;&nbsp;};</pre>`;
  jsSpiralMatrix2Safe: SafeHtml;

  jsLengthOfLastWord = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">lengthOfLastWord</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s<span style="color:#b4b4b4;">.</span>split(<span style="color:#d69d85;">&quot;&nbsp;&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;of&nbsp;arr)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item<span style="color:#b4b4b4;">.</span>replace(<span style="color:#d69d85;">&quot;&nbsp;&quot;</span>,&nbsp;<span style="color:#d69d85;">&quot;&quot;</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">words</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>filter(<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;i<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">last</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;words[words<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;words<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;last<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    };</pre>`;

  jsLengthOfLastWordSafe: SafeHtml;
  jsTrappingRainWater = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">trap</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(height)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>height)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;create&nbsp;left&nbsp;and&nbsp;right&nbsp;pointers</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">right</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;height<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;get&nbsp;the&nbsp;(current)&nbsp;max&nbsp;values&nbsp;of&nbsp;left&nbsp;and&nbsp;right</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">leftMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;height[left];
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">rightMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;height[right];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(left&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;right)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(leftMax&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;rightMax)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;move&nbsp;the&nbsp;left&nbsp;pointer&nbsp;forward&nbsp;and&nbsp;set&nbsp;the&nbsp;new&nbsp;left&nbsp;max,&nbsp;note</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;we&nbsp;need&nbsp;to&nbsp;increment&nbsp;the&nbsp;pointer&nbsp;first&nbsp;to&nbsp;avoid&nbsp;negative&nbsp;values</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leftMax&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(leftMax,&nbsp;height[left]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;leftMax&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;height[left];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;same&nbsp;as&nbsp;before&nbsp;only&nbsp;move&nbsp;right&nbsp;pointer&nbsp;backward</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right<span style="color:#b4b4b4;">--</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rightMax&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(rightMax,&nbsp;height[right]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;rightMax&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;height[right];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsTrappingRainWaterSafe: SafeHtml;

  jsSearchInsert = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">searchInsert</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums,&nbsp;target)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log&nbsp;n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;midpoint&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(nums<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[midpoint]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;midpoint;
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(target&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr[midpoint])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>slice(<span style="color:#b5cea8;">0</span>,&nbsp;midpoint);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>slice(midpoint,&nbsp;arr<span style="color:#b4b4b4;">.</span>length);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;midpoint&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">idx</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>indexOf(target);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;target)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>indexOf(arr[<span style="color:#b5cea8;">0</span>])&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums<span style="color:#b4b4b4;">.</span>indexOf(arr[<span style="color:#b5cea8;">0</span>])&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>indexOf(arr[<span style="color:#b5cea8;">0</span>])&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    };</pre>`;
  jsSearchInsertSafe: SafeHtml;

  jsStrStr = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">strStr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(haystack,&nbsp;needle)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(needle<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;haystack<span style="color:#b4b4b4;">.</span>length)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(needle&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;haystack)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">substring</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">val</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;of&nbsp;needle)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(c))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;val);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">val</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(c);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(c,&nbsp;<span style="color:#b4b4b4;">++</span>val);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;haystack<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">firstElement</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>entries()<span style="color:#b4b4b4;">.</span>next()<span style="color:#b4b4b4;">.</span>value;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(firstElement[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;haystack[i]&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;haystack<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;needle<span style="color:#b4b4b4;">.</span>length)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;substring&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;haystack<span style="color:#b4b4b4;">.</span>substr(i,&nbsp;needle<span style="color:#b4b4b4;">.</span>length);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(substring&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;needle)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;i;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;substring&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
    };</pre>`
  jsStrStrSafe: SafeHtml;

  jsRemoveElement = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">removeElement</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums,&nbsp;val)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;list&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[]&nbsp;;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[i]&nbsp;<span style="color:#b4b4b4;">!==</span>&nbsp;val)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list<span style="color:#b4b4b4;">.</span>push(nums[i]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;list<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;list[i];
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;list<span style="color:#b4b4b4;">.</span>length;
    };</pre>`;
  jsRemoveElementSafe: SafeHtml;

  jsRemoveDuplicatesFromSortedArray = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;removeDuplicates&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;set&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Set(nums);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;iterator&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;set<span style="color:#b4b4b4;">.</span>values();
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;set<span style="color:#b4b4b4;">.</span>size;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;iterator<span style="color:#b4b4b4;">.</span>next()<span style="color:#b4b4b4;">.</span>value;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;set<span style="color:#b4b4b4;">.</span>size;
    };</pre>`;
  jsRemoveDuplicatesFromSortedArraySafe: SafeHtml;

  jsIsValid = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;function&nbsp;<span style="color:#dcdcaa;">isValid</span>(s)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">stack</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;of&nbsp;s)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">switch</span>&nbsp;(c)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;)&#39;</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(stack<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;stack<span style="color:#b4b4b4;">.</span>pop()&nbsp;<span style="color:#b4b4b4;">!==</span>&nbsp;<span style="color:#d69d85;">&#39;(&#39;</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;}&#39;</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(stack<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;stack<span style="color:#b4b4b4;">.</span>pop()&nbsp;<span style="color:#b4b4b4;">!==</span>&nbsp;<span style="color:#d69d85;">&#39;{&#39;</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;]&#39;</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(stack<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;stack<span style="color:#b4b4b4;">.</span>pop()&nbsp;<span style="color:#b4b4b4;">!==</span>&nbsp;<span style="color:#d69d85;">&#39;[&#39;</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">default</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack<span style="color:#b4b4b4;">.</span>push(c);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;stack<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#569cd6;">true</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#569cd6;">false</span>;
  }</pre>`;
  jsIsValidSafe: SafeHtml;

  jsLongestCommonPrefix = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;"> &nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;longestCommonPrefix&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(strs)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n*m),&nbsp;Space:&nbsp;O(m*logn)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;minLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>min(..<span style="color:#b4b4b4;">.</span>strs<span style="color:#b4b4b4;">.</span>map(o&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;o<span style="color:#b4b4b4;">.</span>length));
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">shortestString</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;strs<span style="color:#b4b4b4;">.</span>find(<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;x<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">===</span>&nbsp;minLength);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;of&nbsp;strs)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;minLength;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(s[i]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;shortestString[i])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;shortestString[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(result&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;result<span style="color:#b4b4b4;">.</span>length;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsLongestCommonPrefixSafe: SafeHtml;

  jsRomanToInt = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;romanToInt&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(s)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;I&#39;</span>,&nbsp;<span style="color:#b5cea8;">1</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;V&#39;</span>,&nbsp;<span style="color:#b5cea8;">5</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;X&#39;</span>,&nbsp;<span style="color:#b5cea8;">10</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;L&#39;</span>,&nbsp;<span style="color:#b5cea8;">50</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;C&#39;</span>,&nbsp;<span style="color:#b5cea8;">100</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;D&#39;</span>,&nbsp;<span style="color:#b5cea8;">500</span>)<span style="color:#b4b4b4;">.</span>set(<span style="color:#d69d85;">&#39;M&#39;</span>,&nbsp;<span style="color:#b5cea8;">1000</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;s[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">value</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(c);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;map<span style="color:#b4b4b4;">.</span>get(s[i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>])&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;value)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;value;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;value;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    };</pre>`;
  jsRomanToIntSafe: SafeHtml;
  strStrs(haystack, needle) {
    if (needle.length > haystack.length)
      return -1;
    if (needle == haystack)
      return 0;

    let map = new Map();
    let substring = '';
    for (let c of needle) {
      if (!map.has(c))
        map.set(c, 1);
      else {
        let val = map.get(c);
        map.set(c, ++val);
      }
    }

    for (let i = 0; i < haystack.length; i++) {
      debugger;
      let firstElement = map.entries().next().value;
      if (map.values().next().value === haystack[i] && i <= haystack.length - needle.length) {
        debugger;

        substring += haystack.substring(i, needle.length);
        if (substring === needle) {
          return i;
        }
        else {
          substring = '';
        }
      }
    }

    return -1;
  };

  ngOnInit(): void {
    this.isDetails1 = true;
    this.isDetails2 = true;
    this.isDetails3 = true;
    this.isDetails4 = true;
    this.isDetails5 = true;
    this.isDetails6 = true;
    this.isDetails7 = true;
    this.isDetails8 = true;
    this.isDetails9 = true;
    this.isDetails10 = true;
    this.refresh();
    this.leetCodes = (leetCode as any).default;
    this.leetCodes = this.leetCodes.filter((x) => this.codes.includes(x.Id));


    this.jsMaximumCountSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMaximumCount)
    );
    this.jsMostFrequentEvenSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMostFrequentEven)
    );
    this.jsCountDistinctIntegersSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsCountDistinctIntegers)
    );
    this.jsMinimumOperationsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMinimumOperations)
    );
    this.jsRepeatedCharacterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsRepeatedCharacter)
    );
    this.jsArraySignSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsArraySign)
    );
    this.jsAverageSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsAverage)
    );
    this.jsRunningSumSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsRunningSum)
    );
    this.jsShuffleSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsShuffle)
    );
    this.jsBinarySearchSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsBinarySearch)
    );
    this.jsFindDisappearedNumbersSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsFindDisappearedNumbers)
    );
    this.jsFindDuplicatesSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsFindDuplicates)
    );
    this.jsFirstUniqCharSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsFirstUniqChar)
    );
    this.jsTopKFrequentSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsTopKFrequent)
    );
    this.jsIsPowerOfThreeSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsIsPowerOfThree)
    );
    this.jsIsAnagramSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsIsAnagram)
    );
    this.jsAddDigitsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsAddDigits)
    );
    this.jsContainsDuplicateSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsContainsDuplicate)
    );
    this.jsIsHappySafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsIsHappy)
    );
    this.jsMajorityElementSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMajorityElement)
    );
    this.jsSingleNumberSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsSingleNumber)
    );
    this.jsMaxProfitSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMaxProfit)
    );
    this.jsMergeSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMerge)
    );
    this.jsMinWindowSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMinWindow)
    );
    this.jsClimbStairsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsClimbStairs)
    );
    this.jsMySqrtSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsMySqrt)
    );
    this.jsPlusOneSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsPlusOne)
    );
    this.jsSpiralMatrix2Safe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsSpiralMatrix2)
    );
    this.jsLengthOfLastWordSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsLengthOfLastWord)
    );
    this.jsTrappingRainWaterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsTrappingRainWater)
    );
    this.jsSearchInsertSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsSearchInsert)
    );
    this.jsStrStrSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsStrStr)
    );
    this.jsRemoveElementSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsRemoveElement)
    );
    this.jsRemoveDuplicatesFromSortedArraySafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsRemoveDuplicatesFromSortedArray)
    );
    this.jsIsValidSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsIsValid)
    );
    this.jsLongestCommonPrefixSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsLongestCommonPrefix)
    );
    this.jsRomanToIntSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsRomanToInt)
    );
    this.jsContainerWithTheMostWaterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsContainerWithTheMostWater)
    );
    this.jsPalindromeNumberSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsPalindromeNumber)
    );
    this.jsReverseIntSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsReverseInt)
    );
    this.jsLengthOfLongestSubstringSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsLengthOfLongestSubstring)
    );
    this.jsTwoSumSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.jsTwoSum)
    );
    this.twoSumSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.twoSum)
    );
    this.containerWithTheMostWaterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.containerWithTheMostWater)
    );
    this.containsDuplicateSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.containsDuplicate)
    );
    this.spiralMatrix2Safe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.spiralMatrix2)
    );
    this.findDuplicatesSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.findDuplicates)
    );
    this.maxProfitSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.maxProfit)
    );
    this.isValidSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.isValid)
    );
    this.lengthOfLongestSubstringSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.lengthOfLongestSubstring)
    );
    this.runningSumSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.runningSum)
    );
    this.topKFrequentSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.topKFrequent)
    );
    this.firstUniqCharSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.firstUniqChar)
    );
    this.trappingRainWaterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.trappingRainWater)
    );
    this.minWindowSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.minWindow)
    );
    this.reverseIntSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.reverseInt)
    );
    this.palindromeNumberSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.palindromeNumber)
    );
    this.romanToIntSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.romanToInt)
    );
    this.longestCommonPrefixSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.longestCommonPrefix)
    );
    this.removeDuplicatesFromSortedArraySafe =
      this.sanitizer.bypassSecurityTrustHtml(
        this.processHtml(this.removeDuplicatesFromSortedArray)
      );
    this.removeElementSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.removeElement)
    );
    this.strStrSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.strStr)
    );
    this.searchInsertSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.searchInsert)
    );
    this.lengthOfLastWordSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.lengthOfLastWord)
    );
    this.plusOneSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.plusOne)
    );
    this.mySqrtSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.mySqrt)
    );
    this.climbStairsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.climbStairs)
    );
    this.mergeSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.merge)
    );
    this.singleNumberSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.singleNumber)
    );
    this.majorityElementSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.majorityElement)
    );
    this.isHappySafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.isHappy)
    );
    this.isAnagramSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.isAnagram)
    );
    this.addDigitsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.addDigits)
    );
    this.isPowerOfThreeSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.isPowerOfThree)
    );
    this.findDisappearedNumbersSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.findDisappearedNumbers)
    );
    this.binarySearchSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.binarySearch)
    );
    this.shuffleSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.shuffle)
    );
    this.averageSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.average)
    );
    this.arraySignSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.arraySign)
    );
    this.repeatedCharacterSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.repeatedCharacter)
    );
    this.minimumOperationsSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.minimumOperations)
    );
    this.mostFrequentEvenSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.mostFrequentEven)
    );
    this.countDistinctIntegersSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.countDistinctIntegers)
    );
    this.maximumCountSafe = this.sanitizer.bypassSecurityTrustHtml(
      this.processHtml(this.maximumCount)
    );

  }

  jsCountDistinctIntegers = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;var</span>&nbsp;<span style="color:#9cdcfe;">countDistinctIntegers</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(nums)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;let&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Array(nums<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;<span style="color:#b5cea8;">2</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">length</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums[i];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(nums[i]&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;nums[i]&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(nums[i]&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">10</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;length]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;parseInt(s);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">unique</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[..<span style="color:#b4b4b4;">.</span><span style="color:#569cd6;">new</span>&nbsp;Set(arr)];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;unique<span style="color:#b4b4b4;">.</span>length;
    };</pre>`;
  jsCountDistinctIntegersSafe: SafeHtml;

  jsContainerWithTheMostWater = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;maxArea&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(height)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;left&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;right&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;height<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">maxArea</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(left&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;right)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(height[left]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;height[right])
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxArea&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(maxArea,&nbsp;height[left]&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left));
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxArea&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(maxArea,&nbsp;height[right]&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left));
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right<span style="color:#b4b4b4;">--</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;maxArea;
    };</pre>`;
  jsContainerWithTheMostWaterSafe: SafeHtml;

  jsPalindromeNumber = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;isPalindrome&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;function(x)&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>pow(<span style="color:#b5cea8;">2</span>,&nbsp;<span style="color:#b5cea8;">31</span>))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span>;
    
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">list1</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list1<span style="color:#b4b4b4;">.</span>push(x&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(x&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">10</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;}
     
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">list2</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[];
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;list1<span style="color:#b4b4b4;">.</span>length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i<span style="color:#b4b4b4;">--</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list2<span style="color:#b4b4b4;">.</span>push(list1[i]);
     
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;JSON<span style="color:#b4b4b4;">.</span>stringify(list1)&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;JSON<span style="color:#b4b4b4;">.</span>stringify(list2);
    };</pre>`;
  jsPalindromeNumberSafe: SafeHtml;

  pyReverseInt = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;">def&nbsp;<span style="color:#dcdcaa;">reverse</span>(self,&nbsp;x:&nbsp;<span style="color:#569cd6;">int</span>)&nbsp;<span style="color:#b4b4b4;">-&gt;</span>&nbsp;<span style="color:#569cd6;">int</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;Minus&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;False
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;str(x)[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#d69d85;">&quot;-&quot;</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minus&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;True
  &nbsp;&nbsp;&nbsp;&nbsp;Nums&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[i&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;i&nbsp;<span style="color:#569cd6;">in</span>&nbsp;str(x)&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;i&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#d69d85;">&#39;-&#39;</span>]
  &nbsp;&nbsp;&nbsp;&nbsp;NewNum&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">int</span>(<span style="color:#d69d85;">&quot;&quot;</span><span style="color:#b4b4b4;">.</span>join(reversed(Nums)))
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;Minus&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;True:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NewNum&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">int</span>(NewNum)&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;(<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">2_147_483_648</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;NewNum&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:#b5cea8;">2_147_483_647</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;x:
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;NewNum
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>:
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span></pre>`;
  pyReverseIntSafe: SafeHtml;

  jsReverseInt = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;reverse&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(<span style="color:#9cdcfe;">x</span>)&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">sign</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>sign(x);
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&#39;&#39;</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">*=</span>&nbsp;sign;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(x&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;x&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>floor(x&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">10</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;parseInt(s)&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;sign;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;(result&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>pow(<span style="color:#b5cea8;">2</span>,&nbsp;<span style="color:#b5cea8;">31</span>)&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;(result&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>pow(<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">2</span>,&nbsp;<span style="color:#b5cea8;">31</span>)))&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;result;
    };</pre>`
  jsReverseIntSafe: SafeHtml;

  jsLengthOfLongestSubstring = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;lengthOfLongestSubstring&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(<span style="color:#9cdcfe;">s</span>)&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;set&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Set();
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">maxLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;s<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(set<span style="color:#b4b4b4;">.</span>has(s[i]))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set<span style="color:#b4b4b4;">.</span>delete(s[left]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;set<span style="color:#b4b4b4;">.</span>add(s[i]);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxLength&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>max(maxLength,&nbsp;i&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;maxLength;
    }</pre>`
  jsLengthOfLongestSubstringSafe: SafeHtml;

  jsTwoSum = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;const</span>&nbsp;twoSum&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(<span style="color:#9cdcfe;">nums</span>,&nbsp;<span style="color:#9cdcfe;">target</span>)&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Map();
    &nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">j</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(let&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
    &nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>has(nums[i]))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>set(nums[i],&nbsp;i);
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j<span style="color:#b4b4b4;">++</span>;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>has(target&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;nums[j]))
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;[map<span style="color:#b4b4b4;">.</span>get(target&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;nums[j]),&nbsp;j];
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;[];
    };</pre>`
  jsTwoSumSafe: SafeHtml;

  maximumCount = `<pre style="font-family:Cascadia Mono;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MaximumCount</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Max</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">(),</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">());</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`
  maximumCountSafe: SafeHtml;

  countDistinctIntegers = `<pre style="font-family:Cascadia Mono;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">CountDistinctIntegers</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">length</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">s</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">/=</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">length</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">TryParse</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">out</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;(</span><span style="color:gainsboro;">arr</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  countDistinctIntegersSafe: SafeHtml;

  mostFrequentEven = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MostFrequentEven</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">nums</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;nums
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>Where(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">2</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>)&nbsp;<span style="color:#57a64a;">//&nbsp;all&nbsp;the&nbsp;even&nbsp;elements&nbsp;in&nbsp;nums</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>GroupBy(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n)&nbsp;<span style="color:#57a64a;">//&nbsp;creates&nbsp;key/value&nbsp;pairs&nbsp;of&nbsp;the&nbsp;even&nbsp;elements&nbsp;and&nbsp;their&nbsp;counts</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>OrderByDescending(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n<span style="color:#b4b4b4;">.</span>Count())&nbsp;<span style="color:#57a64a;">//&nbsp;Order&nbsp;by&nbsp;the&nbsp;key&nbsp;with&nbsp;the&nbsp;highest&nbsp;count...</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>ThenBy(<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;n<span style="color:#b4b4b4;">.</span>Key)&nbsp;<span style="color:#57a64a;">//&nbsp;then&nbsp;by&nbsp;key&nbsp;(smallest&nbsp;to&nbsp;largest)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#b4b4b4;">.</span>FirstOrDefault()<span style="color:#b4b4b4;">?.</span>Key&nbsp;<span style="color:#b4b4b4;">??</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;&nbsp;<span style="color:#57a64a;">//&nbsp;return&nbsp;the&nbsp;first&nbsp;key&nbsp;if&nbsp;it&nbsp;exists,&nbsp;else&nbsp;return&nbsp;-1</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre>`
  mostFrequentEvenSafe: SafeHtml;

  minimumOperations = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MinimumOperations</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">operations</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstOrDefault</span><span style="color:gainsboro;">();</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Min</span><span style="color:gainsboro;">();</span>&nbsp;<span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">operations</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstOrDefault</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Min</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">operations</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`
  minimumOperationsSafe: SafeHtml;

  repeatedCharacter = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">char</span>&nbsp;<span style="color:#dcdcaa;">RepeatedCharacter</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  <span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>

  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">c</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#d69d85;">&#39;\0&#39;</span><span style="color:gainsboro;">;</span>
  <span style="color:gainsboro;">}</span></pre>`;
  repeatedCharacterSafe: SafeHtml;

  arraySign = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">ArraySign</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  <span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Contains</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">count</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">count</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">count</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">2</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  <span style="color:gainsboro;">}</span></pre>`;
  arraySignSafe: SafeHtml;

  average = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">double</span>&nbsp;<span style="color:#dcdcaa;">Average</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">salary</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n)),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Array</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Sort</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">salary</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">salary</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">salary</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Skip</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Take</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">salary</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">double</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Convert</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToDouble</span><span style="color:gainsboro;">((</span><span style="color:#569cd6;">double</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">salary</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Sum</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:gainsboro;">salary</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Round</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">result</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">5</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  averageSafe: SafeHtml;

  shuffle = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#dcdcaa;">Shuffle</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">n</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">counter</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">counter</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  shuffleSafe: SafeHtml;

  binarySearch: string = `<pre style="font-family:Cascadia Mono;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">Search</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">nums</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">target</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;nums[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;target)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">midpoint</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;nums;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(nums[midpoint]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;target)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Array<span style="color:#b4b4b4;">.</span>IndexOf(nums,&nbsp;target);
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(target&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr[midpoint])
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Take(midpoint)<span style="color:#b4b4b4;">.</span>ToArray();&nbsp;;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Skip(midpoint)<span style="color:#b4b4b4;">.</span>Take(arr<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>)<span style="color:#b4b4b4;">.</span>ToArray();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;midpoint&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(arr[<span style="color:#b5cea8;">0</span>]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;target)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Array<span style="color:#b4b4b4;">.</span>IndexOf(nums,&nbsp;target);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span>;
  }</pre>`;
  binarySearchSafe: SafeHtml;



  findDisappearedNumbers = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:gainsboro;">IList</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">FindDisappearedNumbers</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">IList</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Contains</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  findDisappearedNumbersSafe: SafeHtml;

  isPowerOfThree = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">bool</span>&nbsp;<span style="color:#dcdcaa;">IsPowerOfThree</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(1),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">log</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Ceiling</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Log</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">3</span><span style="color:gainsboro;">));</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pow</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">3</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">log</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  isPowerOfThreeSafe: SafeHtml;

  addDigits = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">AddDigits</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">num</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;0(1),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">num</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">num</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">9</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#b5cea8;">9</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:gainsboro;">num</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">9</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`
  addDigitsSafe: SafeHtml;

  isAnagram = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">bool</span>&nbsp;<span style="color:#dcdcaa;">IsAnagram</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">t</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">s</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Replace</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;&nbsp;&quot;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&quot;&quot;</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToLower</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">t</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">t</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Replace</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;&nbsp;&quot;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&quot;&quot;</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToLower</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:gainsboro;">t</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">mapS</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">mapT</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">bool</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:#569cd6;">char</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IsPunctuation</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">mapS</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">mapS</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">mapS</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">t</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Replace</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;&nbsp;&quot;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&quot;&quot;</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToLower</span><span style="color:gainsboro;">())</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:#569cd6;">char</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IsPunctuation</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">mapT</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">mapT</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">mapT</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">mapS</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Keys</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">mapT</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">mapT</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">mapS</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">])</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  isAnagramSafe: SafeHtml;

  isHappy = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">bool</span>&nbsp;<span style="color:#dcdcaa;">IsHappy</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n)),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">sum</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pow</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">/=</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>


  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">sum</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">true</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">sum</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">4</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">sum</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">sum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  isHappySafe: SafeHtml;

  majorityElement = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MajorityElement</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">];</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">counter</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">n</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  majorityElementSafe: SafeHtml;

  singleNumber = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">SingleNumber</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">num</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">^</span>&nbsp;<span style="color:gainsboro;">num</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  singleNumberSafe: SafeHtml;

  merge = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">Merge</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums1</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">m</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums2</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(m&nbsp;+&nbsp;n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">m</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">nums1</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums1</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums2</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">m</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">j</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">k</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">m</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">j</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:gainsboro;">nums2</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">j</span><span style="color:gainsboro;">])</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">k</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">k</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums2</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">j</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">j</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">k</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums2</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">j</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  mergeSafe: SafeHtml;

  climbStairs = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">ClimbStairs</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Fibonacci</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">private</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">Fibonacci</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">n</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">n</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  climbStairsSafe: SafeHtml;

  mySqrt = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">MySqrt</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">x</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">double</span>&nbsp;<span style="color:#9cdcfe;">y</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">double</span>&nbsp;<span style="color:#9cdcfe;">z</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">y</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:gainsboro;">y</span><span style="color:gainsboro;">))</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">y</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">z</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">y</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">z</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">z</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">double</span><span style="color:gainsboro;">)(</span><span style="color:gainsboro;">y</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:gainsboro;">y</span><span style="color:gainsboro;">))</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">z</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  mySqrtSafe: SafeHtml;

  plusOne = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#dcdcaa;">PlusOne</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">digits</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">digits</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">digits</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">digits</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">9</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">digits</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">digits</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">digits</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">digits</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">digits</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">digits</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  </pre>`
  plusOneSafe: SafeHtml;

  lengthOfLastWord = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">LengthOfLastWord</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Split</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;&nbsp;&quot;</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">item</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Replace</span><span style="color:gainsboro;">(</span><span style="color:#d69d85;">&quot;&nbsp;&quot;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#d69d85;">&quot;&quot;</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Last</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  lengthOfLastWordSafe: SafeHtml;

  searchInsert = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">SearchInsert</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">target</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log&nbsp;n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">midpoint</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:gainsboro;">target</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">midpoint</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">target</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">midpoint</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">target</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">midpoint</span><span style="color:gainsboro;">])</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Take</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">midpoint</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Skip</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">midpoint</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Take</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">midpoint</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">;</span>&nbsp;

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">target</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Array</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IndexOf</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">target</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">target</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Array</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IndexOf</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">])</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">Array</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IndexOf</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">])</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">Array</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IndexOf</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">])</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">default</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  searchInsertSafe: SafeHtml;

  strStr = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">StrStr</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">haystack</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">needle</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">needle</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">needle</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">substring</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">needle</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">First</span><span style="color:gainsboro;">()</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Key</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">needle</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">substring</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">haystack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Substring</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">needle</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">substring</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">needle</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">substring</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b4b4b4;">-</span><span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  strStrSafe: SafeHtml;

  removeElement = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">RemoveElement</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">val</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">list</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:gainsboro;">val</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">list</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">list</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">list</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">list</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  removeElementSafe: SafeHtml;

  removeDuplicatesFromSortedArray = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">RemoveDuplicates</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;(</span><span style="color:gainsboro;">nums</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ElementAt</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  removeDuplicatesFromSortedArraySafe: SafeHtml;

  longestCommonPrefix = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;string</span>&nbsp;<span style="color:#dcdcaa;">LongestCommonPrefix</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">strs</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n*m),&nbsp;Space:&nbsp;O(m*logn)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">minLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">strs</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Min</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#9cdcfe;">shortestString</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">strs</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstOrDefault</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">minLength</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">strs</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">minLength</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:gainsboro;">shortestString</span><span style="color:#b4b4b4;">?</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">])</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">shortestString</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">minLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  longestCommonPrefixSafe: SafeHtml;

  romanToInt = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">RomanToInt</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">dictionary</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;()</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;I&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;V&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">5</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;X&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">10</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;L&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">50</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;C&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">100</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;D&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">500</span>&nbsp;<span style="color:gainsboro;">},</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>&nbsp;<span style="color:#d69d85;">&#39;M&#39;</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1000</span>&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">};</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">value</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">dictionary</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">dictionary</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]]</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:gainsboro;">value</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">-=</span>&nbsp;<span style="color:gainsboro;">value</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">value</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  romanToIntSafe: SafeHtml;

  palindromeNumber = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;bool</span>&nbsp;<span style="color:#dcdcaa;">IsPalindrome</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">x</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">MaxValue</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">list1</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">list1</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">/=</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">list2</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">List</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">list1</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">list2</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">list1</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]);</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">list1</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">SequenceEqual</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">list2</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  palindromeNumberSafe: SafeHtml;

  reverseInt = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">Reverse</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">x</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(log(n)),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">sign</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Sign</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">*=</span>&nbsp;<span style="color:gainsboro;">sign</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">s</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">%</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">x</span>&nbsp;<span style="color:#b4b4b4;">/=</span>&nbsp;<span style="color:#b5cea8;">10</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">TryParse</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">out</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span><span style="color:gainsboro;">)</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;<span style="color:gainsboro;">sign</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  reverseIntSafe: SafeHtml;

  firstUniqChar = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">FirstUniqChar</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">IndexOf</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">FirstOrDefault</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Value</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Key</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  firstUniqCharSafe: SafeHtml;

  topKFrequent = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#dcdcaa;">TopKFrequent</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">k</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">OrderByDescending</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Value</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Select</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">k</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">k</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Key</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Take</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">k</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToArray</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  topKFrequentSafe: SafeHtml;

  minWindow = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;string</span>&nbsp;<span style="color:#dcdcaa;">MinWindow</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">t</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n+m)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Empty</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">t</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">right</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">minLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">right</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">rightChar</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">right</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">rightChar</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">rightChar</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">rightChar</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">counter</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">right</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">left</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">minLength</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">minLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">right</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">left</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Substring</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">left</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">minLength</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">leftChar</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">left</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">];</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">leftChar</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">leftChar</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">leftChar</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  minWindowSafe: SafeHtml;

  runningSum = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#dcdcaa;">RunningSum</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">arr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">nums</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:#b5cea8;">0</span><span style="color:gainsboro;">];</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">arr</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  runningSumSafe: SafeHtml;

  trappingRainWater = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">Trap</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">height</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">height</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;create&nbsp;left&nbsp;and&nbsp;right&nbsp;pointers</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">right</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;get&nbsp;the&nbsp;(current)&nbsp;max&nbsp;values&nbsp;of&nbsp;left&nbsp;and&nbsp;right</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">leftMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">left</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">rightMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">right</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">left</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">right</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">leftMax</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">rightMax</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;move&nbsp;the&nbsp;left&nbsp;pointer&nbsp;forward&nbsp;and&nbsp;set&nbsp;the&nbsp;new&nbsp;left&nbsp;max,&nbsp;note</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;we&nbsp;need&nbsp;to&nbsp;increment&nbsp;the&nbsp;pointer&nbsp;first&nbsp;to&nbsp;avoid&nbsp;negative&nbsp;values</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">left</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">leftMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Max</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">leftMax</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">left</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">leftMax</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">left</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;same&nbsp;as&nbsp;before&nbsp;only&nbsp;move&nbsp;right&nbsp;pointer&nbsp;backward</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">right</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">rightMax</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Max</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">rightMax</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">right</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span>&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;<span style="color:gainsboro;">rightMax</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">height</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">right</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  trappingRainWaterSafe: SafeHtml;

  lengthOfLongestSubstring = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">LengthOfLongestSubstring</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">HashSet</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">maxLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Contains</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Remove</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">left</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">left</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">set</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">s</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">maxLength</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Max</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">maxLength</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">left</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">maxLength</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  lengthOfLongestSubstringSafe: SafeHtml;

  isValid = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;bool</span>&nbsp;<span style="color:#dcdcaa;">IsValid</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Stack</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">stack</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Stack</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">char</span><span style="color:gainsboro;">&gt;();</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">s</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">switch</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;)&#39;</span><span style="color:gainsboro;">:</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pop</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#d69d85;">&#39;(&#39;</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;]&#39;</span><span style="color:gainsboro;">:</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pop</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#d69d85;">&#39;[&#39;</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">case</span>&nbsp;<span style="color:#d69d85;">&#39;}&#39;</span><span style="color:gainsboro;">:</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;<span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pop</span><span style="color:gainsboro;">()</span>&nbsp;<span style="color:#b4b4b4;">!=</span>&nbsp;<span style="color:#d69d85;">&#39;{&#39;</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">default</span><span style="color:gainsboro;">:</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Push</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">c</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">break</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">stack</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Count</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">0</span>&nbsp;<span style="color:#b4b4b4;">?</span>&nbsp;<span style="color:#569cd6;">true</span>&nbsp;<span style="color:#b4b4b4;">:</span>&nbsp;<span style="color:#569cd6;">false</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  isValidSafe: SafeHtml;

  maxProfit = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">MaxProfit</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">prices</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">maxProfit</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">min</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Pow</span><span style="color:gainsboro;">(</span><span style="color:#b5cea8;">10</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">4</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">prices</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">prices</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">prices</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">])</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">min</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Min</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">min</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">prices</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">maxProfit</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">Math</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Max</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">maxProfit</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">prices</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:gainsboro;">min</span><span style="color:gainsboro;">)</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">maxProfit</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  maxProfitSafe: SafeHtml;

  containerWithTheMostWater = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>&nbsp;<span style="color:#dcdcaa;">MaxArea</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">height</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">left</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>,&nbsp;<span style="color:#9cdcfe;">right</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;height<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">maxArea</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;(left&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;right)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(height[left]&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;height[right])
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxArea&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>Max(maxArea,&nbsp;height[left]&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left));
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxArea&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>Max(maxArea,&nbsp;height[right]&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;(right&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;left));
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right<span style="color:#b4b4b4;">--</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;maxArea;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre>
  `;
  containerWithTheMostWaterSafe: SafeHtml;

  containsDuplicate = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;bool</span>&nbsp;<span style="color:#dcdcaa;">ContainsDuplicate</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">num</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">num</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">num</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">num</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Any</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">kvp</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">kvp</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Value</span>&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  containsDuplicateSafe: SafeHtml;

  findDuplicates = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:gainsboro;">IList</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#dcdcaa;">FindDuplicates</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">[]</span>&nbsp;<span style="color:#9cdcfe;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(1)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;</span>&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:gainsboro;">Dictionary</span><span style="color:gainsboro;">&lt;</span><span style="color:#569cd6;">int</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">&gt;();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;<span style="color:gainsboro;">nums</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#b4b4b4;">!</span><span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ContainsKey</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">))</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Add</span><span style="color:gainsboro;">(</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">);</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">map</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">]</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">map</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Where</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Value</span>&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#b5cea8;">2</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Select</span><span style="color:gainsboro;">(</span><span style="color:#9cdcfe;">x</span>&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:gainsboro;">x</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Key</span><span style="color:gainsboro;">)</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">ToList</span><span style="color:gainsboro;">();</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;
  findDuplicatesSafe: SafeHtml;

  spiralMatrix2 = `<pre style="font-family:Consolas;font-size:13px;color:#dadada;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span><span style="color:gainsboro;">[][]</span>&nbsp;<span style="color:#dcdcaa;">GenerateMatrix</span><span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">n</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n*n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[][]</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">][];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:#b4b4b4;">.</span><span style="color:gainsboro;">Length</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">n</span><span style="color:gainsboro;">];</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">counter</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">startRow</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">endRow</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">startCol</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span><span style="color:gainsboro;">,</span>&nbsp;<span style="color:#9cdcfe;">endCol</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">n</span>&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span><span style="color:gainsboro;">;</span>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">while</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:gainsboro;">startRow</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">endRow</span>&nbsp;<span style="color:#b4b4b4;">&amp;&amp;</span>&nbsp;<span style="color:gainsboro;">startCol</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">endCol</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">startCol</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">endCol</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">startRow</span><span style="color:gainsboro;">][</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">startRow</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">startRow</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;<span style="color:gainsboro;">endRow</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">][</span><span style="color:gainsboro;">endCol</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">endCol</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">endCol</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:gainsboro;">startCol</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">endRow</span><span style="color:gainsboro;">][</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">endRow</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;<span style="color:gainsboro;">(</span><span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">endRow</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span>&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:gainsboro;">startRow</span><span style="color:gainsboro;">;</span>&nbsp;<span style="color:gainsboro;">i</span><span style="color:#b4b4b4;">--</span><span style="color:gainsboro;">)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">{</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">[</span><span style="color:gainsboro;">i</span><span style="color:gainsboro;">][</span><span style="color:gainsboro;">startCol</span><span style="color:gainsboro;">]</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:gainsboro;">counter</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">startCol</span><span style="color:#b4b4b4;">++</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:gainsboro;">result</span><span style="color:gainsboro;">;</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:gainsboro;">}</span></pre>`;

  spiralMatrix2Safe: SafeHtml;

  twoSumSafe: SafeHtml;
  twoSum = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#569cd6;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public</span>&nbsp;int</span>[]&nbsp;<span style="color:#dcdcaa;">TwoSum</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">nums</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">target</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dictionary&lt;<span style="color:#569cd6;">int</span>,&nbsp;<span style="color:#569cd6;">int</span>&gt;&nbsp;<span style="color:#9cdcfe;">map</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Dictionary&lt;<span style="color:#569cd6;">int</span>,&nbsp;<span style="color:#569cd6;">int</span>&gt;();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">j</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;nums<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>map<span style="color:#b4b4b4;">.</span>ContainsKey(nums[i]))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map<span style="color:#b4b4b4;">.</span>Add(nums[i],&nbsp;i);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j<span style="color:#b4b4b4;">++</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(map<span style="color:#b4b4b4;">.</span>ContainsKey(target&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;nums[j]))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;<span style="color:#569cd6;">int</span>[]&nbsp;{&nbsp;map[target&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;nums[j]],&nbsp;j&nbsp;};
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Array<span style="color:#b4b4b4;">.</span>Empty&lt;<span style="color:#569cd6;">int</span>&gt;();
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</pre>`;

  copyText(val: string) {
    try {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      let text = document.getElementById(val).innerText;
      selBox.value = text;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.toastr.success('Copied Successfully', 'Copy Text');
    } catch {
      this.toastr.error('Unable to copy', 'Copy Text');
    }
  }

}
